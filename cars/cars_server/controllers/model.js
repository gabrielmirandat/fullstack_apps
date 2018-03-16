module.exports = (app) => {
  const db = require('../libs/db_conn.js');

  const ModelController = {

    getAll(req, res) {
      let sql = 'SELECT * FROM models';
      let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send({data: results});
      })
    },

    get(req, res) {
      let sql = `SELECT * FROM models WHERE id = ${req.params.id}`;
      let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.send({data: result});
      })
    },

    getModelsByBrand(req, res) {
      let sql = `SELECT * FROM models WHERE brand_id = ${req.params.brand_id}`;
      let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send({data: results});
      })
    }
  }
  return ModelController
};    