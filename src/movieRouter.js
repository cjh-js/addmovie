import express from "express";
import { home, movieDetail, filterMovie, getAdd, postAdd } from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.get("/:id(\\d+)", movieDetail);
movieRouter.get("/filter", filterMovie);
movieRouter.route("/add").get(getAdd).post(postAdd);

export default movieRouter;
