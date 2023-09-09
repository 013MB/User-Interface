const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = 3500
var SibApiV3Sdk = require('sib-api-v3-sdk');
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey =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

app.use(express.urlencoded({extended : true}));

app.set("view engine", "ejs")

mongoose.connect('mongodb://0.0.0.0:27017/UserInterface')
.then (()=> {
    console.log("Database connected")
}) .catch(()=> {
    console.log("Something went wrong")
})

const User = require("./model/user")

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/", async(req, res) => {
    const data = new User(req.body)
    await data.save()
    await new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail({
        subject: "Your details",
        sender: { email: "mabhame@gmail.com", name: "Mihir" },
        to: [{ name: data.name, email: data.email }],
        htmlContent: "welcomeEmail(userName)",
      })
    res.send("Data saved")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

const path = require("path")

  app.use(express.static(path.join(__dirname, 'public')));
  

  
 
