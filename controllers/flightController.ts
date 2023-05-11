import { Request, Response } from "express";
import db from "../database/config";
import {
  BoardingPassI,
  FlightI,
  PassengerI,
  SeatAssignedI,
} from "../intefaces";

//  /flights/:id/passengers

export const checkinPassenger = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const passenger = await db.query(
      `SELECT * FROM passenger WHERE passenger_id = ${id}`
    );
    const boarding_pass = await db.query(
      `SELECT * FROM boarding_pass WHERE passenger_id = ${id}`
    );
    const flightPassenger = boarding_pass[0][0] as FlightI;
    const passengerData = passenger[0][0] as PassengerI;
    const boardingPassData = boarding_pass[0][0] as BoardingPassI;
    const flight = await db.query(
      `SELECT * FROM flight WHERE flight_id = ${flightPassenger.flight_id}`
    );
    const flightData = flight[0][0] as FlightI;
    const seatFind = await db.query(
      `SELECT * FROM seat WHERE airplane_id = ${flightData.airplane_id} AND seat_type_id = ${boardingPassData.seat_type_id} LIMIT 1;`
    );
    const seatAssigned = seatFind[0][0] as SeatAssignedI;
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
  } catch (error) {
    return res.status(501).json({ error: error });
  }
};

export const getAllFlights = async (req: Request, res: Response) => {
  try {
    const flights = await db.query("SELECT * FROM flight");
    return res.json(flights);
  } catch (error) {
    console.log(error);
  }
};
