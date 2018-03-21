module.exports = (app) => {
  const { rental } = app.controllers;

  app.get('/rentals/get', rental.getAll);
  app.get('/rentalswithuserscars/get', rental.getAllComplete);
  app.post('/rental/add', rental.add);
  app.delete('/rental/delete/:id', rental.delete);

  app.get('/usersavailabletorent', rental.getUsersAvailableToRent);
  app.get('/carsavailabletorent', rental.getCarsAvailableToRent);
};