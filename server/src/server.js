const express = require("express");
const router = require("./careRequest/router.js");

const PORT = process.env.PORT || 8080;
const app = express();
const parser = express.json();

app.use(parser);
app.use(router);

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
