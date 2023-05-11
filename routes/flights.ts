import { Request, Response, Router } from "express";
import {
  checkinPassenger,
  getAllFlights,
} from "../controllers/flightController";

export const router = Router(); // {}

// get all flights
router.get("/", getAllFlights);

//  /flights/:id/passengers
// GET /products/:id_category?price=200&&max_price=500
router.get("/:id/passengers", checkinPassenger);

export default router;
