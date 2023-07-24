import { config } from "dotenv";
config();
import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import routes from "./routes";
app.use(routes);

app.listen(port, () => console.log(`App listening on ${port}`));
