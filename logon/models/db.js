const Sequelize = require('sequelize');

const sequelize = new Sequelize(moanne_users, 'root', 'Moanne1315114145031513161141425!!', {
	host: 'localhost',
	dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log('sequile = SUCCESS');
}).catch((error) => {
    console.log('sequelize = ERROR: ' + error);
});

module.exports = sequelize;