"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const flightController_1 = require("../controllers/flightController");
exports.router = (0, express_1.Router)(); // {}
// get all flights
exports.router.get("/", flightController_1.getAllFlights);
//  /flights/:id/passengers
// GET /products/:id_category?price=200&&max_price=500
exports.router.get("/:id/passengers", flightController_1.checkinPassenger);
exports.default = exports.router;
//# sourceMappingURL=flights.js.map