'use strict';

module.exports = {
    env: 'development',
    https: false,
    port: process.env.PORT || 3000,
    mongo: {
        uri: 'mongodb://mongo:27017/pisignage-server' ,
        options: {useMongoClient: true}
    }
};