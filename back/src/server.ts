console.log("About to start a server");

import express from "express";
import serveIndex from "serve-index";
import api from "./api";

const app = express();
const port: number = 3000;
const publicDir = ".";

app.use((req, res, next) => {
  console.log("req: ", req.method, req.url);
  next();
});

app.use("/api", api);

app.use(express.static(publicDir));
app.use(serveIndex(publicDir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
