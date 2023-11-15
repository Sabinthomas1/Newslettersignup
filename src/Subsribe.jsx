import React, { useState } from "react";
import tick from "./images/icon-success.svg";
import illustration from "./images/illustration-sign-up-desktop.svg";
import "./subscribe.css";
import ThanksPage from "./ThanksPage";
const Subsribe = () => {
  const [state, setState] = useState(true);
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState("");
  const [check,setCheck] = useState(true)

  function handleChange(e){
    setEmail(e.target.value)
  }
 
  const handleSubmit = (e) =>{
    e.preventDefault()
    // if(email===""){
    //   setEmail("")
    // }
    
  }
  const handleClick = (e) => {
    // e.preventDefault()
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
    if  (email === ""){
      setValid("enter email");
      setState(state)
    }else if(!regex.test(email)) {
      setValid("Email is not valid");
      setState(state)
      setCheck(!check)
    }else if(regex.test(email)) {
      setValid("");
      setState(!state)
    }else{
      
    }
  };
  return (
    <div>
      {state ? (
        <div className="container1">
          <div className="container2">
            <h1> Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div className="tick-handle">
              <img className="tick" src={tick} alt="" />
              <p> Product discovery and building what matters</p>
            </div>
            <div className="tick-handle">
              <img className="tick" src={tick} alt="" />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="tick-handle">
              <img className="tick" src={tick} alt="" />
              <p>And much more!</p>
            </div>
            <label className="email-add">Email address</label>
            <form onSubmit={handleSubmit}>
              <input
               style={!check ? {backgroundColor:'hsla(0, 100%, 66%, 0.626)'}: null}
                type="email"
                placeholder="enter your email"
                onChange={handleChange}
                value={email}
              />
              <p>{valid}</p> 
            </form>

            
            <button onClick={handleClick}>
              Subscribe to monthly newsletter
            </button>
          </div>
          <div className="illustration">
            <img  src={illustration} alt="" />
          </div>
        </div>
      ) : (
        <div className="hello">
          <ThanksPage value={email} />
        </div>
      )}
    </div>
  );
};

export default Subsribe;
