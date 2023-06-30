const AbstractManager = require("./AbstractManager");

class ModelManager extends AbstractManager {
  constructor() {
    super({ table: "model" });
  }

  insert(model) {
    return this.database.query(
      `insert into ${this.table} (name,marque,ram,storage) values (?,?,?,?)`,
      [model.name, model.marque, model.ram, model.storage]
    );
  }

  update(model) {
    return this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [model.name, model.id]
    );
  }

  findByName(name) {
    return this.database.query(`select * from  ${this.table} where name = ?`, [
      name,
    ]);
  }
}

module.exports = ModelManager;
