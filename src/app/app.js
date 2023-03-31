import express from "express";
import { PORT } from "../config/servidor.config.js";
import { engine } from "express-handlebars";
import { webRouter } from "../routes/web.routes.js";
import { apiRouter } from "../routes/api.routes.js";
import { dbConnection } from "../database/config.js";

const app = express();

dbConnection()
app.engine("handlebars", engine());
app.set("views", "./views");

app.use('/public',express.static('./public'))
app.use(express.json())

app.use('/', webRouter)
app.use('/api', apiRouter)

app.listen(PORT, () => {
  console.log(`server running port ${PORT}`);
});
