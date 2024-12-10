"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getAllProducts = void 0;
const productModel_1 = __importDefault(require("../models/productModel"));
const getAllProducts = async (req, res) => {
    try {
        const products = await productModel_1.default.getProducts();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};
exports.getAllProducts = getAllProducts;
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productModel_1.default.getProductById(id);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};
exports.getProductById = getProductById;
const createProduct = async (req, res) => {
    const { name, description, price, stock } = req.body;
    const productBody = { name, description, price, stock };
    try {
        const newProduct = await productModel_1.default.createProduct(productBody);
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(500).json({ status: 500, error: error.message });
        console.log(error);
    }
};
exports.createProduct = createProduct;
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, stock } = req.body;
        const updateDataProduct = await productModel_1.default.updateProduct(id, { name, description, price, stock });
        res.status(200).json(updateDataProduct);
    }
    catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};
exports.updateProduct = updateProduct;
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await productModel_1.default.deleteProduct(id);
        res.status(200).json(deletedProduct);
    }
    catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};
exports.deleteProduct = deleteProduct;
