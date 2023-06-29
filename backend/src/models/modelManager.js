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
      `update ${this.table} set title = ? where id = ?`,
      [model.title, model.id]
    );
  }
}

module.exports = ModelManager;
