import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {

  const [weight , setWeight] = useState(null);
  const [height , setHeight] = useState(null);
  const [getBmi, setGetBmi] = useState(false);
  const [bmi , setbmi] = useState(null);
  const navigate = useNavigate();

  const userId = JSON.parse(localStorage.getItem("userId"))

  useEffect(() => {
    if(!userId){
      navigate("/register")
    }
  },[userId])


  const handleBmi = () => {
    const bmi_details = {
      weight : weight,
      height : height
    }

    if(height.length < 0 || weight.length < 0 ){
      
    }
    else{
      axios.post(`/calculate/:${userId}/bmi` , bmi_details)
      .then((data) => {
        alert("Your Bmi is calculated and stored in Database");
        console.log(data);
        console.log(data.data.bmi);
        setbmi(data.data.bmi);
        setGetBmi(true);
      })
      .catch = (err) => {
        alert("Something went wrong!");
        console.log(err);
      }
    }

  }

  return (
    <div>
      <h1 className="bmi_head">BMI CALCULATOR</h1>
      <div className="bmi_container">
        <Stack spacing={4}>
          <FormControl id="weight">
            <FormLabel>Weight (in Kilograms)</FormLabel>
            <Input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </FormControl>
          <FormControl id="height">
            <FormLabel>Height (in feet)</FormLabel>
            <Input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </FormControl>
          <Stack spacing={10}>
            <Button
              bg={"green.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              
              onClick = {handleBmi}
            >
              CALCULATE BMI
            </Button>
          </Stack>
        </Stack>
      </div>
        <div>
           {
             getBmi ? <div className="calculated_bmi"> Your BMI IS : {bmi} </div> : <div className="calculated_bmi"> Enter Details First </div>
           }
        </div>
    </div>
  );
};

export default HomePage;
