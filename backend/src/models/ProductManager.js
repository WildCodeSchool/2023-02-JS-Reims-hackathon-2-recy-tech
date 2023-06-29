const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "product" });
  }

  insert(product) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      product.title,
    ]);
  }

  update(product) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [product.title, product.id]
    );
  }
}

module.exports = ProductManager;
