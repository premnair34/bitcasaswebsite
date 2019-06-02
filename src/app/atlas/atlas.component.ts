import { Component, OnInit } from '@angular/core';
import {  ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map} from "rxjs/operators";
import { environment } from './../../environments/environment';
import * as AOS from 'aos';
@Component({
    selector: 'app-atlas',
    templateUrl: './atlas.component.html',
    styleUrls: ['./atlas.component.scss']
})
export class AtlasComponent implements OnInit {
    contactForm: FormGroup;
    successMsg:any;
    relatedItems:any = ['Services','Corporate training','Big Data consulting','Blockchain'];
    constructor( private formbuilder: FormBuilder,private http: HttpClient) {
    }

    // <div>Name: ${this.contactForm.name}</div>
    // <div>Email: ${this.contactForm.email}</div>
    // <div>Related: ${this.contactForm.related}</div>
    // <div>Message: ${this.contactForm.message}</div>
    ngOnInit() {
        AOS.init();
        this.contactForm = this.formbuilder.group({
          name: ['', Validators.required],
          email:['', Validators.required],
          related:['Services', Validators.required],
          message:['', Validators.required]
        });
    }

    get name() {
      return this.contactForm.get('name')
    }
    get email() {
      return this.contactForm.get('email')
    }
    get related() {
      return this.contactForm.get('related')
    }
    get message() {
      return this.contactForm.get('message')
    }
    jumpTo(section) {
        document.querySelector('#'+section).scrollIntoView({behavior: 'smooth'});
    }
    scrollContact(section,val){
      this.jumpTo(section);
      this.contactForm.controls['related'].setValue(this.relatedItems[val]);
    }
    submitContact(formDirective) {
      console.log(this.contactForm.value);
      this.http.post(environment.apiUrl + "contactus",this.contactForm.value)
      // .pipe(map(res => res))
      .subscribe((res:any) => {
        this.successMsg = res.message;
        // console.log(res)
      },(err) => {
        this.successMsg = err.message;
      });
      this.contactForm.reset();
      formDirective.resetForm(formDirective);
    }
}
