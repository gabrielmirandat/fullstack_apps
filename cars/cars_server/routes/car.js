module.exports = (app) => {
  const { car } = app.controllers;

  app.get('/cars/get', car.getAll);
  app.get('/car/get/:id', car.get);
  app.post('/car/add', car.add);
  app.put('/car/edit/:id', car.update);
  app.delete('/car/delete/:id', car.delete);

  app.get('/carsbyuser/:user_id', car.getCarsByUser);
};
