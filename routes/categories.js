const categoriesRouter = require("express").Router();

const {sendAllCategories, sendCategoryCreated } = require('../controllers/categories');
const  { findAllCategories, createCategory } = require('../middlewares/categories');

categoriesRouter.get('/categories', sendAllCategories, findAllCategories);
categoriesRouter.post('/categories', sendCategoryCreated, createCategory)

module.exports = categoriesRouter