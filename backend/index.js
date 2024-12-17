
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const newUserModel = require("./models/newUser");


const app = express()
app.use(cors(
  {
    origin: ["https://deviq-ai.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
  }
));
app.use(express.json())


mongoose.connect('mongodb+srv://dsp70458:<jf3nmsIep0L8SMUB>@deviq.uofiz.mongodb.net/?retryWrites=true&w=majority&appName=deviq')

app.get("/", (req, res) => {
  res.json("Hello");
})

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    newUserModel.findOne({email: email})
    .then(user => {
        if (user) {
            if(user.password === password) {
                res.json("success")
            } else {
                res.json("the password is incorrect")
            }
        } else {
            res.json("No record found");
        }
    })
})

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  newUserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("the password is incorrect")
      }
    } else {
        res.json("no record existed")
    }
  });
});

app.post("/register", (req, res) => {
  newUserModel
    .create(req.body)
    .then((newUser) => res.json(newUser))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
