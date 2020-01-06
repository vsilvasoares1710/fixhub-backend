class Database {
  constructor(databaseName, host, user, password) {
    this.credentials = {
      host: `${host}`,
      user: `${user}`,
      password: `${password}`,
      database: `${databaseName}`
    };
    this.connection = require("mysql").createConnection(this.credentials);

    this.createDB = this.createDB.bind(this);
  }
  createDB = databaseName => {
    this.connection.query(`CREATE DATABASE ${databaseName}`, err => {
			if (err) throw err;
			this.connection.end(err => {
				if (err) throw err;
			})
      console.log(`O Banco de Dados ${databaseName} foi criado com sucesso.`);
		});

  };
  newTable = (tableName, p_values) => {
    let values = "";
    p_values.map((value, index) => {
      index < p_values.length - 1
        ? (values += `${p_values[index][0]} ${p_values[index][1]}, `)
        : (values += `${p_values[index][0]} ${p_values[index][1]}`);
    });
    this.connection.query(`CREATE TABLE ${tableName} (${values})`, err => {
			if (err) throw err;
			this.connection.end(err => {
				if (err) throw err;
			})
      console.log(`A tabela ${tableName} com os valores: ${values} foi criada com sucesso.`);
    });
  };
}

const db = new Database(
  null,
  "localhost",
  "root",
  "rootpassword"
);
const values = [
  ["name2", "VARCHAR(255)"],
  ["address3", "VARCHAR(255)"]
];

db.createDB("database_teste")
// db.newTable("Tabela3", values);
