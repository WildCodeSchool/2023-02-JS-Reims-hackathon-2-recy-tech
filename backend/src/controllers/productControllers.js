const models = require("../models");

const browse = (req, res) => {
  models.product
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.product
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const product = req.body;

  // TODO validations (length, format...)

  product.id = parseInt(req.params.id, 10);

  models.product
    .update(product)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const product = req.body;

  // TODO validations (length, format...)

  models.product
    .insert(product)
    .then(([result]) => {
      res.location(`/models/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.product
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const addProductAndModel = (req, res) => {
  // Vérifier si le modèle existe
  models.model.findByName(req.body.model_name).then(([rows]) => {
    if (rows[0] == null) {
      res.sendStatus(404);
    } else {
      const modelId = rows[0].id;
      const productData = {
        state: req.body.state,
        antutu_value: req.body.antutu_value,
        has_accessories: req.body.has_accessories,
        price: req.body.price,
        category: req.body.category,
        commentary: req.body.commentary,
        id_model: modelId,
      };
      models.product.insert(productData).then(([result]) => {
        res.location(`/products/${result.insertId}`).sendStatus(201);
      });
    }
  });
};

/** const addProductAndModel = (req, res) => {
  // vérifier si le model exist
  models.model.findByName(req.body.model_name).then(([rows]) => {
    if (rows[0] == null) {
      res.sendStatus(404);
    } else {
      req.body.id_model = rows[0].id;
      models.product.insert(req.body).then(([result]) => {
        res.location(`/models/${result.insertId}`).sendStatus(201);
      });
    }
  });
}; */

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  addProductAndModel,
};
