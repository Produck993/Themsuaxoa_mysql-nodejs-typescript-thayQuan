"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controller/user-controller"));
exports.routes = express_1.default.Router();
exports.routes.get('/', user_controller_1.default.showListUser);
exports.routes.get('/create', user_controller_1.default.showCreateUser);
exports.routes.post('/create', user_controller_1.default.createUser);
exports.routes.get('/edit/:id', user_controller_1.default.showFormEdit);
exports.routes.post('/edit/:id', user_controller_1.default.editForm);
exports.routes.get('/delete/:id', user_controller_1.default.deleteUser);
//# sourceMappingURL=routes.js.map