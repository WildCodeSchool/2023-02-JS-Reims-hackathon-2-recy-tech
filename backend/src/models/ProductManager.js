const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "product" });
  }

  insert(product) {
    return this.database.query(
      `insert into ${this.table} (state,antutu_value,has_accessories,id_model) values (?,?,?,?)`,
      [
        product.state,
        product.antutu_value,
        product.has_accessories,
        product.id_model,
      ]
    );
  }

  update(product) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [product.title, product.id]
    );
  }
}

module.exports = ProductManager;
