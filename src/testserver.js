const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use(express.json());

app.post("/proxy", (req, res) => {
  console.log(req.body.href);
  try {
    getRequest(req.body.href).then((response) =>
      res.send(JSON.stringify(response))
    );
  } catch (e) {
    res.send(JSON.stringify(e));
  }
});

app.listen(3001, () => {
  console.log("Proxy server running on http://localhost:3001");
});

async function getRequest(path) {
  let response = await fetch(path, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });
  let body = await response.json();
  return body;
}
