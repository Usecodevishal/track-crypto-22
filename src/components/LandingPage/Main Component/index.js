import React from "react";
import "./styles.css";
import Button from "../../Common/Button";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient(2).png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function MainComponent() {
  return (
    <div className="flex-info">
      <div className="left-heading">
        <motion.h1
          className="crypto-track-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>

        <motion.h1
          className="real-time-heading"
          initial={{ opactiy: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opactiy: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="left-btn-div"
          initial={{ opactiy: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Link to="/dashboard">
          <Button text={"Dashboard"} onClick={()=>console.log("Go to DashboardPage")}outlined={false}/>
          </Link>
          <Button text={"share app"} onClick={()=> alert("Shared App")}outlined={true} />
        </motion.div>
      </div>
      <div className="right-part">
        
        <motion.img
           className="iphone-img"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
          src={iphone}
          
        />
        <img src={gradient} className="gradient-img" alt="img" />
      </div>
      
    </div>
    
  );
}

export { MainComponent };


