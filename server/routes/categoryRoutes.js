const express = require('express')
const { createCategoryController, getCategoryController, deleteCategoryController, updateCategoryController } = require('../controller/categoryController')

const routes = express.Router()

routes.post('/create-category', createCategoryController)
// get category
routes.get('/get-category', getCategoryController) 
// delete category
routes.delete('/delete-category/:id', deleteCategoryController)
// update category
routes.put('/update-category/:id', updateCategoryController)

module.exports = routes