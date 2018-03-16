module.exports = (app) => {
  const { brand } = app.controllers;

  app.get('/brands/get', brand.getAll);
  app.get('/brand/get/:id', brand.get);
};