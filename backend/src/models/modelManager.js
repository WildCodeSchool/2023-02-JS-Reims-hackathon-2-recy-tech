const AbstractManager = require("./AbstractManager");

class modelManager extends AbstractManager {
  constructor() {
    super({ table: "model" });
  }

  insert(model) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      model.title,
    ]);
  }

  update(model) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [model.title, model.id]
    );
  }
}

module.exports = modelManager;
