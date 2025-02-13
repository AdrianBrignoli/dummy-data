"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((req, res, next) => {
    console.log(`User connected: ${req.method} ${req.url}`);
    next(); // Proceed to the next middleware or route handler
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Use API routes
app.use('/api', productRoutes_1.default);
app.use(errorHandler_1.default);
app.listen(10000, () => {
    console.log('Server is running on port 10000');
});
exports.default = app;
