"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = __importDefault(require("../utils/CustomError"));
const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError_1.default) {
        res.status(err.statuscode).json({ message: err.messageClient });
    }
    else {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.default = errorHandler;
