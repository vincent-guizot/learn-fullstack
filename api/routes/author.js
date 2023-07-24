import { Router } from "express";
const authorRoute = Router();
import { AuthorController } from "../controllers";

authorRoute.use("/", AuthorController.getAllAuthors);
authorRoute.use("/details/:id", AuthorController.findById);
authorRoute.post("/create", AuthorController.create);
authorRoute.delete("/delete/:id", AuthorController.delete);
authorRoute.put("/update/:id", AuthorController.update);
authorRoute.get("/details/:id/book-list", AuthorController.bookList);

export default authorRoute;
