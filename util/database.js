const Sequelize = require('sequelize')
const sequelize = new Sequelize('nodeudemy', 'root', '',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'nodeudemy',
//     password: ''
// });

// module.exports = pool.promise();

// monogo credentails asgharali uoC4AcskoAeuT2zh