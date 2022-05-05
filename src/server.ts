import express from "express";
import swaggerUi from "swagger-ui-express";

import router from "./routes";
import swaggerDocs from "./swagger.json";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(router);

app.listen(port, () => console.log(`server is listening on ${port}`));
