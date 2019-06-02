var config = {
    development: {
        //url to be used in link generation
        url: 'http://localhost:3000/',
        home_url: 'http://localhost:4200/',
        //SQL connection settings
        //server details
        server: {
            host: '127.0.0.1',
            port: '3000'
        }
    },
    production: {
        //url to be used in link generation
        url: 'https://api.bitcasas.co/',
        home_url: 'https://bitcasas.com/',
        //server details
        server: {
            host:   '127.0.0.1',
            port:   '3000'
        }
    }
    };
    module.exports = config;
