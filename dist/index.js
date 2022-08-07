"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./src/routes/routes");
const app = (0, express_1.default)();
const PORT = 3000;
app.set("views", 'src/view/');
app.set("view engine", "ejs");
app.use(express_1.default.static('public'));
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use((0, express_fileupload_1.default)({
    createParentPath: true
}));
app.use('', routes_1.routes);
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:3000`);
});
//# sourceMappingURL=index.js.map