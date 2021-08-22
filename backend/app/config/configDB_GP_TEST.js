const mariadb = require('mariadb');
const db_config_RomB = require('./db.config');
const poolGP = mariadb.createPool(
	{ host: db_config_RomB.HOST,
	user: db_config_RomB.USER, 
	password: db_config_RomB.PASSWORD, 
	database: db_config_RomB.DB, 
	connectionLimit: 5 });


poolGP.getConnection((err, connection) => {
	if (err) {
		console.error(err.code);
		console.error(err);
	}
	if (connection) connection.release();
	return;
});


module.exports = poolGP;