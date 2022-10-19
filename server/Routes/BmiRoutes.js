const express = require('express')
const router = express.Router();
const userBmi = require('../models/BmiSchema');


router.post("/:userId/bmi", (req, res) => {
    const userId = req.params.userId;
    var height = parseInt(req.body.height) * 0.305;
    var weight = parseInt(req.body.weight);
    var bmi = weight / (height * height);
    let payload = {
        height: height,
        weight: weight,
        bmi : bmi.toFixed(2),
        userId : userId,
    }
    const task = new userBmi(payload)
    task.save((err, success) => {
        if(err){
            return res.status(500).send({message : "something went wrong"})
        }
        return res.status(201).send(success)
    })

})

router.get("/:userId/getbmi", async (req, res) => {
    const userId = req.params.userId
    const bodyMassIndex = await userBmi.find({userId})
    res.send(bodyMassIndex);
})


module.exports = router;