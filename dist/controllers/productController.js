"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const ProductModel_1 = __importDefault(require("../models/ProductModel"));
const CustomError_1 = __importDefault(require("../utils/CustomError"));
class ProductController {
    static getAllProducts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield ProductModel_1.default.getAll();
                res.json(data);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    throw new CustomError_1.default('Invalid product ID', 404);
                }
                const data = yield ProductModel_1.default.getProductById(id);
                if (!data) {
                    throw new CustomError_1.default('Product not found', 400);
                }
                res.json(data);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.ProductController = ProductController;
