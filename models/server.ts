import express, { Application } from "express";
import FlightsRouter from "../routes/flights";
import db from "../database/config";
import morgan from "morgan";
import cors from "cors";

class Server {
  private app: Application;
  private PORT: string;
  private apiPaths = {
    flights: "/api/flights",
  };
  constructor() {
    this.app = express();
    this.PORT = "5050";
    this.connectDb();
    this.middewares();
    this.routes();
  }

  middewares() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.static("public"));
  }

  async connectDb() {
    try {
      await db.authenticate();
      console.log("Authentication successfully");
    } catch (error) {
      throw new Error("Error connecting to database: " + error);
    }
  }

  routes() {
    this.app.use(this.apiPaths.flights, FlightsRouter);
  }

  listen() {
    this.app.listen(5050, () => {
      console.log("listening on the port 5050");
    });
  }
}

export default Server;
