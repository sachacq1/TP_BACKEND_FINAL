"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
}, {
    versionKey: false
});
const Product = mongoose_1.default.model("products", productSchema);
const getProducts = async () => {
    try {
        const products = await Product.find();
        return products;
    }
    catch (error) {
        throw new Error("Error al obtener los productos");
    }
};
const createProduct = async (dataProduct) => {
    try {
        const newProduct = new Product(dataProduct);
        await newProduct.save();
        return newProduct;
    }
    catch (error) {
        console.error("Error al crear el producto:", error);
        {
            throw new Error(`Error de validación al crear el producto: ${error.message}`);
        }
    }
};
const updateProduct = async (id, updateData) => {
    try {
        const updateDataProduct = await Product.findByIdAndUpdate(id, updateData, { new: true });
        if (!updateDataProduct) {
            throw new Error("Producto no encontrado");
        }
        return updateDataProduct;
    }
    catch (error) {
        throw new Error("Error al actualizar el producto");
    }
};
const getProductById = async (id) => {
    try {
        const productById = await Product.findById(id);
        if (!productById) {
            throw new Error("Producto no existente");
        }
        return productById;
    }
    catch (error) {
        throw new Error("Error al obtener el producto por id");
    }
};
const deleteProduct = async (id) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            throw new Error("Producto no encontrado");
        }
        return deletedProduct;
    }
    catch (error) {
        throw new Error("Error al borrar producto");
    }
};
exports.default = { getProducts, createProduct, updateProduct, getProductById, deleteProduct };
