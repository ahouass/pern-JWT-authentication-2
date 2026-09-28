import express from "express";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({"message":"ok"});
})

app.listen(3001, () => {
    console.log("app listening on port 3001");
  });