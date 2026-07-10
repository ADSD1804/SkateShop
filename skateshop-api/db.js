/* eslint-disable require-jsdoc */
import Sequelize from 'sequelize';

class DBInstance {
	constructor() {
		const dbCfg = {
			user: '<usuario_base_datos>',
			host: '<ip_o_dns_servidor>',
			database: '<nombre_base_datos>',
			password: '<clave_usuario_base_datos>',
			port: 5432,
		};
		this.sequelize = new Sequelize(dbCfg.database, dbCfg.user, dbCfg.password, {
			host: dbCfg.host,
			dialect: 'postgres',
			logging: false,
		});
	}
}

export default new DBInstance().sequelize;