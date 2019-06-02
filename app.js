const bodyparser = require('body-parser');
const express = require('express');
const cors = require('cors');
// const path = require('path');
const app = express();
// var router = express.Router();
require('dotenv').config()
var env = process.env.NODE_ENV || 'development';
var nodemailer = require('nodemailer');
var config = require('./config')[env];
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
app.use(cors());
app.use(function(req,res,next){
    res.header("access-Control-Allow-Orgin","*");
    res.header("access-Control-Allow-Orgin","Orgin,X-Requested-With, Content-Type, Accept")
    next();
});
app.post('/api/contactus',(req,res) => {
  var body = `<div>Name:  ${req.body.name}</div>
              <div>Email:  ${req.body.email}</div>
              <div>Query:  ${req.body.related}</div>
              <div>Messages:  ${req.body.message}</div>`;
  var subject = `Neaxture - ${req.body.name} contacted you`;
  sendMail(subject,body);
  res.status(200).json({'error':false,message:'We will get back to you soon'});
});
app.post('/api/subscribe',(req,res) => {
  var html = `<div>Email:  ${req.body.email}</div>`;
  var subject = `Neaxture - ${req.body.email} subscribed our letters`;
  sendMail(subject,body);
  res.status(200).json({'error':false,message:'You have subscribed to news letters sucessfully'});
});
function sendMail(subject,body){
  var mailOptions = {
    to : process.env.EMAIL_USER,
    subject :subject,
    html : body
  };
  smtpTransport.sendMail(mailOptions, function(error, res){
    console.log(error)
  });
};
app.listen(config.server.port, function (){
  console.log(`server started on port ${config.server.port}`);
});
