import './App.css';
import './style.css';
import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import WelcomeImage from './Assets/Welcome.png'

function App() {
  const[isGenderBox2,setisGenderBox2] = useState(false);
  const[isGenderBox3,setisGenderBox3] = useState(false);
  const[isGenderBox4,setisGenderBox4] = useState(false);
  const[isMarried2, setisMarried2] = useState(false);
  const buttonClick = ()=>{setisGenderBox2(!isGenderBox2);
  };
  const buttonClick2 = ()=>{setisGenderBox3(!isGenderBox3);
  };
  const buttonClick3 = ()=>{setisGenderBox4(!isGenderBox4);
  };
  const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
  'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
  'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  const[SelectedState, setSelectedState] = useState("");
  const[day,SetDay] = useState("");
  const[month,SetMonth] = useState("");
  const[year,SetYear] = useState("");
  const days = Array.from({length:31},(_,i)=>i+1);
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const currentYear=new Date().getFullYear();
  const years = Array.from({length:100},(_,i)=>currentYear-i);
  const value = currentYear-year;
  const HandleDayChange = (event) => {SetDay(event.target.value)};
  const HandleMonthChange = (event) => {SetMonth(event.target.value)};
  const HandleYearChange = (event) => {SetYear(event.target.value)};
  const HandleStateChange = (e) => {setSelectedState(e.target.value)};

  return (
    <><div>
      <img className = "WelcomeImage" src={WelcomeImage} alt='Welcome'/>
    </div><div>
        <p className="Description">Hello, welcome to this survey. Please fill out the questions below.</p>
        <p className="FirstNameText">First Name</p>
      </div>
      <div className="FirstName"><TextInput style={{outlineStyle: 'none'}}placeholder = " Type Here..."/></div>
      <p className="LastNameText">Last Name</p>
      <div className="LastName"><TextInput style={{outlineStyle: 'none'}}placeholder=" Type Here..."/></div>
      <p className="EmailText">Email Address</p>
      <div className = "Email"><TextInput style={{outlineStyle: 'none'}}placeholder=" Type Here..."/></div>
      <div className="GenderText">
        <label>What is your gender?</label>
        <option value = "">Select <strong>one</strong></option>

      </div>
      <View>
        <div className={isGenderBox2 ?"GenderBox2":"GenderBox"}><button className = "GenderButtonStyle" onClick = {buttonClick}>Male</button></div></View>
        
      <View>
      <div className={isGenderBox3 ?"GenderBox2":"GenderBox"}><button className = "GenderButtonStyle" onClick = {buttonClick2}>Female</button></div></View>
      
      
      
      <div className ="DateofBirthText">
        <h2>What is your Date of Birth?</h2>
        <div className = "DateofBirthButton">
          <select className = "SelectText" value = {month}onChange = {HandleMonthChange}>
            <option value="">Month</option>
            {months.map((m)=>(<option key = {m}value = {m}>{m}</option>))}
          </select>
          <label>  /  </label>
          <select className = "SelectText" value = {day}onChange = {HandleDayChange}>
            <option value="">Day</option>
            {days.map((d)=>(<option key = {d}value = {d}>{d}</option>))}
          </select>
          <label>  /  </label>
          <select className = "SelectText" value = {year}onChange = {HandleYearChange}>
            <option value="">Year</option>
            {years.map((y)=>(<option key = {y}value = {y}>{y}</option>))}
          </select>
      </div>
      <h2>You are {value===currentYear ? "--":currentYear-year} years old</h2>
      
      
</div>
<div><p className="EmailText">What is your Address? (Optional)</p>
      <div className = "Email"><TextInput style={{outlineStyle: 'none'}}placeholder=" Type Here..."/></div>
      </div>
      <div><p className="EmailText">City</p></div>
      <div className = "Email"><TextInput style={{outlineStyle: 'none'}}placeholder=" Type Here..."/></div>
      <div><p className="StateText">State</p></div>

      <div className="StateDropdownElement">
        <label htmlFor = "State Dropdown"></label>
        <select className = "StateDropdownBox" id = "State Dropdown" value = {SelectedState} onChange = {HandleStateChange}>
          <option value = "">Select State</option>
          {states.map((state, index)=>(
            <option key = {index}value = {state}>{state}</option>
          ))}
        </select>
      </div>
      <div><p className="ZipcodeText">Zipcode</p></div>
      <div className = "Email"><TextInput style={{outlineStyle: 'none'}}placeholder=" Type Here..."/></div>

      <div>
        <div className="GenderText">
        <label>Are you...?</label>
        <option value = "">Select <strong>one</strong></option></div>
        <View>
        <div className={isGenderBox2 ?"GenderBox2":"GenderBox"}><button className = "GenderButtonStyle" onClick = {buttonClick}>Unmarried</button></div></View>
        <View>
        <div className={isGenderBox3 ?"GenderBox2":"GenderBox"}><button className = "GenderButtonStyle" onClick = {buttonClick2}>Married</button></div></View>
        <div className={isGenderBox4 ?"GenderBox2":"GenderBox"}><button className = "GenderButtonStyle" onClick = {buttonClick3}>In Relationship</button></div>
      </div>
      <div>
        <p className="EmailText">What is your ethnicity/race</p>
        <div><button className="EthnicityButton"></button></div>
        </div>
      </>
  );
}

export default App;