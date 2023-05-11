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
const express_1 = __importDefault(require("express"));
const flights_1 = __importDefault(require("../routes/flights"));
const config_1 = __importDefault(require("../database/config"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPaths = {
            flights: "/api/flights",
        };
        this.app = (0, express_1.default)();
        this.PORT = "5050";
        this.connectDb();
        this.middewares();
        this.routes();
    }
    middewares() {
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.static("public"));
    }
    connectDb() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield config_1.default.authenticate();
                console.log("Authentication successfully");
            }
            catch (error) {
                throw new Error("Error connecting to database: " + error);
            }
        });
    }
    routes() {
        this.app.use(this.apiPaths.flights, flights_1.default);
    }
    listen() {
        this.app.listen(5050, () => {
            console.log("listening on the port 5050");
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map