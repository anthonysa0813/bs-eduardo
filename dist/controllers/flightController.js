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
exports.getAllFlights = exports.checkinPassenger = void 0;
const config_1 = __importDefault(require("../database/config"));
//  /flights/:id/passengers
const checkinPassenger = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const passenger = yield config_1.default.query(`SELECT * FROM passenger WHERE passenger_id = ${id}`);
        const boarding_pass = yield config_1.default.query(`SELECT * FROM boarding_pass WHERE passenger_id = ${id}`);
        const flightPassenger = boarding_pass[0][0];
        const passengerData = passenger[0][0];
        const boardingPassData = boarding_pass[0][0];
        const flight = yield config_1.default.query(`SELECT * FROM flight WHERE flight_id = ${flightPassenger.flight_id}`);
        const flightData = flight[0][0];
        const seatFind = yield config_1.default.query(`SELECT * FROM seat WHERE airplane_id = ${flightData.airplane_id} AND seat_type_id = ${boardingPassData.seat_type_id} LIMIT 1;`);
        const seatAssigned = seatFind[0][0];
        const passengerObject = {
            passengerId: passengerData.passenger_id,
            dni: passengerData.dni,
            name: passengerData.name,
            age: passengerData.age,
            country: passengerData.country,
            boardingPassId: boardingPassData.boarding_pass_id,
            purchaseId: boardingPassData.purchase_id,
            seatTypeId: boardingPassData.seat_type_id,
            seatId: seatAssigned.seat_id,
        };
        const responseCheckin = {
            flightId: flightData.flight_id,
            takeoffDateTime: flightData.takeoff_date_time,
            takeoffAirport: flightData.takeoff_airport,
            landingDateTime: flightData.landing_date_time,
            landingAirport: flightData.landing_airport,
            airplaneId: flightData.airplane_id,
            passengers: [passengerObject],
        };
        return res.json(responseCheckin);
    }
    catch (error) {
        return res.status(501).json({ error: error });
    }
});
exports.checkinPassenger = checkinPassenger;
const getAllFlights = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const flights = yield config_1.default.query("SELECT * FROM flight");
        return res.json(flights);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllFlights = getAllFlights;
//# sourceMappingURL=flightController.js.map