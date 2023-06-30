const AbstractManager = require("./AbstractManager");
const ModelManager = require("./ModelManager");

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "product" });
    this.model = new ModelManager();
  }

  insert(product) {
    return this.database.query(
      `insert into ${this.table} (state, antutu_value, has_accessories, price, id_model, category, commentary) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        product.state,
        product.antutu_value,
        product.has_accessories,
        product.price,
        product.id_model,
        product.category,
        product.commentary,
      ]
    );
  }

  update(product) {
    return this.database.query(
      `update ${this.table} set state = ?, antutu_value = ?, has_accessories = ?,id_model=? where id = ?`,
      [
        product.state,
        product.antutu_value,
        product.has_accessories,
        product.id_model,
        product.id,
      ]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT ${this.table}.id, ${this.table}.state, ${this.table}.antutu_value, ${this.table}.has_accessories, ${this.table}.price, ${this.table}.category, ${this.table}.commentary, ${this.table}.id_model, ${this.model.table}.name, ${this.model.table}.marque, ${this.model.table}.ram, ${this.model.table}.storage, ${this.model.table}.img, ${this.model.table}.network FROM ${this.table} JOIN ${this.model.table} ON ${this.table}.id_model = ${this.model.table}.id`
    );
  }

  find(id) {
    return this.database.query(
      `select * from  ${this.table} JOIN ${this.model.table} ON ${this.table}.id_model = ${this.model.table}.id where ${this.table}.id = ?`,
      [id]
    );
  }
}
module.exports = ProductManager;
