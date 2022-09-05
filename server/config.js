require('dotenv').config();

const config = {
    db : {
        host: 'localhost',
        user: 'root',
        password: `${process.env.MYSQL_PASSWORD}`,
        database: 'restaurant'
    },
};

module.exports = config;