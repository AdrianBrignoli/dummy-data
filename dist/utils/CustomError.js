"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.messageClient = message;
        this.statuscode = statusCode;
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
exports.default = CustomError;
