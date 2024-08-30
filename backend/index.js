const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const port = 8000;

const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  salary: {
    type: String,
  },
});

mongoose
  .connect("mongodb://127.0.0.1:27017/humaradb")
  .then(() => {
    console.log("Connection Done👍");
  })
  .catch((err) => {
    console.log("Error Found 😒", err);
  });

const Emp = mongoose.model("emp", userSchema);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
//Routes
app.post("/", async (req, res) => {
  const { firstname, lastname, email, salary } = req.body;
  console.log("Vedant");

  console.log(firstname, lastname, email, salary);
  const abc = await Emp.create({
    firstname: firstname,
    lastname: lastname,
    email: email,
    salary: salary,
  });
  return res.send({ msg: "Success" });
});

app.get("/", async (req, res) => {
  console.log("Vedant");
  const result = await Emp.find();
  return res.send(result);
});
app.get("/:id", async (req, res) => {
  console.log("aditya 1 :", req.params)
  const id = req.params.id;
  const result = await Emp.findById(id);
  return res.send(result);
});
app.get("/favicon.ico", (req, res) => res.status(204).end());

app.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Emp.findByIdAndUpdate(id, req.body);
  return res.send({ msg: "Success" });
});
app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Emp.findByIdAndDelete(id);
  return res.send({ msg: "Success" });
});
app.listen(8000, () => {
  console.log(`Example app listening on port ${port}!`);
});
