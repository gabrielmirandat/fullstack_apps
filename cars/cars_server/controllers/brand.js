module.exports = (app) => {
  const db = require('../libs/db_conn.js');

  const BrandController = {

    getAll(req, res) {
      let sql = 'SELECT * FROM brands';
      let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send({data: results});
      })
    },

    get(req, res) {
      let sql = `SELECT * FROM brands WHERE id = ${req.params.id}`;
      let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.send({data: result});
      })
    }
  }
  return BrandController
};    