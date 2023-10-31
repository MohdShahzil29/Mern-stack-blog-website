const slugify = require("slugify")
const categoryModels = require("../models/categoryModels")

const createCategoryController = async (req, res) => {
    try {
        const {name} = req.body
        // validation
        if (!name) {
            return res.status(500).send({
              success: false,
              message: "Name is require"
            })
        }
        const existingCategory = await categoryModels.findOne({name})

        if (existingCategory) {
            return res.status(500).send({
                success: false,
                message: "Category already exist"
            })
        }
        // creating new category
        const category = await new categoryModels({
            name,
            slug: slugify(name)
        }).save()

        return res.status(200).send({
            success: true,
            message: "Category has been created",
            category
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Error to creating Category"
        })
    }
}

const getCategoryController = async (req, res) => {
    try {
        const category = await categoryModels.find({})
        return res.status(200).send({
            success: true,
            message: "Created category list",
            category
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Error to getting created Category"
        })
    }
}

// update category
const updateCategoryController = async (req, res) => {
  try {
    const {name} = req.body
    const {id} = req.params

    const category = await categoryModels.findByIdAndUpdate(
        id,
        {name, slug: slugify(name)},
        {new: true}
    )
    return res.status(200).send({
        success: true,
        message: 'category has been updated',
        category
    })
  } catch (error) {
    console.log(error)
    return res.status(500).send({
        success: false,
        message: 'Error to deleting category'
    })
  }
}

const deleteCategoryController = async (req, res) => {
    try {
        const {id} = req.params
        await categoryModels.findByIdAndDelete(id)
        return res.status(200).send({
            success: true,
            message: 'Category has been deleted'
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error to deleting category'
        })
    }
}

module.exports = {createCategoryController, getCategoryController, deleteCategoryController, updateCategoryController}