module.exports = (app) => {
  const { model } = app.controllers;

  app.get('/models/get', model.getAll);
  app.get('/model/get/:id', model.get);

  app.get('/modelsbybrand/:brand_id', model.getModelsByBrand);
};