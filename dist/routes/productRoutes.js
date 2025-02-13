"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductController_1 = require("../controllers/ProductController");
const router = express_1.default.Router();
router.get('/products', ProductController_1.ProductController.getAllProducts);
router.get('/products/:id', ProductController_1.ProductController.getProduct);
exports.default = router;
