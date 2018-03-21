module.exports = (app) => {
  const { car } = app.controllers;

  app.get('/cars/get', car.getAll);
  app.get('/carswithbrandsmodels/get', car.getAllComplete);
  app.get('/car/get/:id', car.get);
  app.post('/car/add', car.add);
  app.put('/car/edit/:id', car.update);
  app.delete('/car/delete/:id', car.delete);
};
