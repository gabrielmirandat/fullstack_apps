module.exports = (app) => {
  const db = require('../libs/db_conn.js');

  const RentalController = {

    getAll(req, res) {
      let sql = 'SELECT * FROM rentals';
      let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send({data: results});
      })
    },

    getAllComplete(req, res) {
      let sql = 'SELECT R.id, R.user_id, R.car_id, U.name AS user_name, B.name AS car_brand, M.name AS car_model FROM rentals R INNER JOIN users U ON R.user_id = U.id INNER JOIN cars C ON R.car_id = C.id INNER JOIN brands B ON C.brand_id = B.id INNER JOIN models M ON C.model_id = M.id';
      let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send({data: results});
      })
    },

    add(req, res) {
      let data = req.body;
      let sql = 'INSERT INTO rentals SET ?';
      let query = db.query(sql, data, (err, result) => {
        if(err) throw err;
        res.send({data: result.insertId});
      });
    },

    getUsersAvailableToRent(req, res) {
      let sql = 'select U.id, U.name from users U left join rentals R on U.id = R.user_id where R.id is NULL';
      let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send({data: results});
      })  
    },

    getCarsAvailableToRent(req, res) {
      let sql = 'select C.id, B.name as car_brand, M.name as car_model \
      from cars C  \
      inner join brands B on C.brand_id = B.id \
      inner join models M on C.model_id = M.id \
      left join \
      rentals R \
      on C.id = R.car_id \
      where R.car_id is null';
      let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send({data: results});
      })  
    },

    delete(req, res) {
      let sql = `DELETE FROM rentals WHERE id = ${req.params.id}`;
      let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.send({data: "Deletado com sucesso!"});
      })
    }
  }
  return RentalController
};    