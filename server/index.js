const express = require('express');
const dotenv = require('dotenv');
const db = require('./db');
const UserRoutes = require('./Routes/UserRoutes')
const BmiRoutes = require('./Routes/BmiRoutes')
const Users = require("./models/UserSchema")

const app = express();
const port = process.env.PORT || 8080 ;
dotenv.config()
app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("This is the BMI calculator App")
// });

// app.get('/', (req, res) => {
//   Users.find({}, (error, data) => {
//       if(error) {
//         console.log("Error", error);
//       }
//       else{
//         res.send(data);
//       }
//    })
// })

app.use("/api/auth" , UserRoutes)

app.use("/calculate" , BmiRoutes)


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    console.log(`App is running at http://localhost:${port}`);
});