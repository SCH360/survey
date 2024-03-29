import './App.css';
import './style.css';
import axios from 'axios';
import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import WelcomeImage from './Assets/Welcome.png'

function App() {
  const[SelectedState, setSelectedState] = useState("");
  const[day,SetDay] = useState("");
  const[month,SetMonth] = useState("");
  const[year,SetYear] = useState("");
  const[FirstName, SetFirstName] = useState("");
  const[LastName, SetLastName] = useState("");
  const[Email, SetEmail] = useState("");
  const[Gender, SetGender] = useState("");
  const apiEndPoint = "http://0.0.0.0:5000/api";
  const[isGenderBox2,setisGenderBox2] = useState(true);
  const[isGenderBox3,setisGenderBox3] = useState(true);
  const[isGenderBox4,setisGenderBox4] = useState(true);
  const[isMarried2, setisMarried2] = useState(false);
  const[isMarried3, setisMarried3] = useState(false);
  const[isMarried4, setisMarried4] = useState(false);
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
  const days = Array.from({length:31},(_,i)=>i+1);
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const currentYear=new Date().getFullYear();
  const years = Array.from({length:100},(_,i)=>currentYear-i);
  const value = currentYear-year;
  const questions = [
    {
      question:"What is your ethnicity/race?",
      options:["American Indian or Alaskan Native", "Asian/Pacific Islander", "Black or African American", "Hispanic", "White/Caucasian","Other"]
    }
  ];
const ReligionQuestions = [
  {
    ReligionQuestion:"What religion do you identify with?",
    options:["Christian", "Roman Catholic", "Mormon", "Orthodox", "Jewish", "Muslim", "Buddhist", "Hindu", "Atheist", "Agnostic", "None of the above"]
  }
];
const EnjoyQuestions = [
  {
    EnjoyQuestion:"I enjoyed this survey:",
    options:["Strongly Agree", "Agree", "Neither agree nor disagree", "Disagree", "Strongly Disagree"]
  }
];
const ReferQuestions = [
  {
    ReferQuestion:"How did you hear about this website?",
    options:["Social Media", "Outdoor Advertising", "Website", "Word-of-Mouth", "Family and Friends"]
  }
];
const[CurrentQuestion, setCurrentQuestion] = useState(0);
const [answers, setAnswers] = useState([]);
const HandleAnswer = (answer) => {};
const HandleSurvey = async() => {
  try{
    const response = await axios.post(`${apiEndPoint}/surveys`, {
    FirstName, LastName, Email, Gender, month, day, year, state:SelectedState
    });
    console.log("Survey Response", response.data);
  }
  catch(error){
    console.error("Error Submitting Survey", error.message);
  }
}
  return (
    
    <>
    {/* This is the welcome image */}
    <div><img className = "WelcomeImage" src={WelcomeImage} alt='Welcome'/></div>

    <div>
      {/* This is the welcome/description text */}
        <p className="Description">Hello, welcome to this survey. Please fill out the questions below.</p>
        {/* This is the First Name Question */}
        <p className="FirstNameText">First Name</p>
    </div>

      <div className="FirstName">
      <input className = "BiggerText" type="text" placeholder = " Type Here..." value = {FirstName} onChange = {(e) => SetFirstName(e.target.value)}/>
        </div>
      {/* This is the Last Name Question */}
      <p className="LastNameText">Last Name</p>
      <div className="LastName">
      <input className = "BiggerText" type="text" placeholder = " Type Here..." value = {LastName} onChange = {(e)=> SetLastName(e.target.value)}/>
      </div>
      {/* This is the Email Address Question */}
      <p className="EmailText">Email Address</p>
      <div className="Email">
      <input className = "BiggerText" type="text" placeholder = " Type Here..." value = {Email} onChange = {(e) => SetEmail(e.target.value)}/>
      </div>



      {/* This is the gender question */}
      <div className="GenderText">
        <label>What is your gender?</label>
        <option value = "">Select <strong>one</strong></option>

      </div>
      {/* These are the gender buttons */}
      <View>
         <div className ={Gender === "Male" ? "GenderBox2":"GenderBox"}>
          <button className='GenderButtonStyle' onClick={()=>SetGender("Male")}>
            Male
          </button>
         </div>

        </View>
        
      <View>
      <div className ={Gender === "Female" ? "GenderBox2":"GenderBox"}>
          <button className='GenderButtonStyle' onClick={()=>SetGender("Female")}>
            Female
          </button>
         </div>
        </View>
      
      




      {/* This is the Date of Birth Question */}
      <div className ="DateofBirthText">
        <h2>What is your Date of Birth?</h2>
        <div className = "DateofBirthButton">
          {/* This is the Date of Birth Buttons */}
          <select className = "SelectText" value = {month}onChange = {(e)=>SetMonth(e.target.value)}>
            <option value="">Month</option>
            {months.map((m)=>(<option key = {m}value = {m}>{m}</option>))}
          </select>
          <label>  /  </label>
          <select className = "SelectText" value = {day}onChange = {(e)=>SetDay(e.target.value)}>
            <option value="">Day</option>
            {days.map((d)=>(<option key = {d}value = {d}>{d}</option>))}
          </select>
          <label>  /  </label>
          <select className = "SelectText" value = {year}onChange = {(e)=>SetYear(e.target.value)}>
            <option value="">Year</option>
            {years.map((y)=>(<option key = {y}value = {y}>{y}</option>))}
          </select>
      </div>
      {/* This is the Date of Birth Text (You are -- years old) */}
      <h2>You are {value===currentYear ? "--":currentYear-year} years old</h2>
      
      
</div>
{/* This is the Address Question */}
<div><p className="EmailText">What is your Address? (Optional)</p>
      <div className= "Email">
      <input className = "BiggerText" type="text" placeholder=" Type Here..."/></div>
      </div>
      <div><p className="EmailText">City</p>
      <div className ="Email">
      <input className = "BiggerText" type="text" placeholder=" Type Here..."/></div>
      </div>
      {/* This is the State Question */}
      <div><p className="StateText">State</p></div>
      {/* These are the state options */}
      <div className="StateDropdownElement">
        <label htmlFor = "State Dropdown"></label>
        <select className = "StateDropdownBox" id = "State Dropdown" value = {SelectedState} onChange = {(e)=>setSelectedState(e.target.value)}>
          <option value = "">Select State</option>
          {states.map((state, index)=>(
            <option key = {index}value = {state}>{state}</option>
          ))}
        </select>
      </div>
      {/* This is the zipcode question */}
      <div><p className="ZipcodeText">Zipcode</p>
      <div className = "Email">
      <input className = "BiggerText" type="text" placeholder=" Type Here..."/></div>
      </div>



      <div>
        <div className="GenderText">
        {/* This is the relationship question */}
        <label>Are you...?</label>
        <option value = "">Select <strong>one</strong></option></div>

        {/* <View>
         <div className ={Gender === "Male" ? "GenderBox2":"GenderBox"}>
          <button className='GenderButtonStyle' onClick={()=>SetGender("Male")}>
            Male
          </button>
         </div>

        </View> */}

        <View>
        <div className={isGenderBox2 ? "GenderBox2":"GenderBox"}>
          <button className = "GenderButtonStyle" onClick = {()=>setisMarried2("Unmarried")}>
            Unmarried
          </button>
          </div>
          </View>
        <View>
        <div className={isGenderBox3 ?"GenderBox2":"GenderBox"}>
          <button className = "GenderButtonStyle" onClick = {()=>setisMarried3("Married")}>
            Married
            </button>
            </div>
            </View>
        <View>
        <div className={isGenderBox4 ?"GenderBox2":"GenderBox"}>
          <button className = "GenderButtonStyle" onClick = {()=>setisMarried4("In Relationship")}>
            In Relationship
            </button>
            </div>
            </View>
      </div>




      {/* This is the Race Question */}
<div className = "First" >
  <div className = "QuestionContainer">
    <h3>
      {questions[CurrentQuestion].question}
      <ul className = "OptionsList">
        {questions[CurrentQuestion].options.map((option,index)=>(
          <li key = {index} >
            <label>
              <input
              type = "radio"
              name = "answer"
              value = {option}
              onClick = {()=>HandleAnswer(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </h3>
  </div>
</div>
{/* This is the Religion Question */}
<div className = "First" >
  <div className = "QuestionContainer">
    <h3>
      {ReligionQuestions[CurrentQuestion].ReligionQuestion}
      <ul className = "OptionsList">
        {ReligionQuestions[CurrentQuestion].options.map((option,index)=>(
          <li key = {index} >
            <label>
              <input
              type = "radio"
              name = "answer"
              value = {option}
              onClick = {()=>HandleAnswer(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </h3>
  </div>
</div>
{/* This the "Did You Enjoy this Survey" Question */}
<div className = "First" >
  <div className = "QuestionContainer">
    <h3>
      {EnjoyQuestions[CurrentQuestion].EnjoyQuestion}
      <ul className = "OptionsList">
        {EnjoyQuestions[CurrentQuestion].options.map((option,index)=>(
          <li key = {index} >
            <label>
              <input
              type = "radio"
              name = "answer"
              value = {option}
              onClick = {()=>HandleAnswer(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </h3>
  </div>
</div>
{/* This is the refer question */}
<div className = "First" >
  <div className = "QuestionContainer">
    <h3>
      {ReferQuestions[CurrentQuestion].ReferQuestion}
      <ul className = "OptionsList">
        {ReferQuestions[CurrentQuestion].options.map((option,index)=>(
          <li key = {index} >
            <label>
              <input
              type = "radio"
              name = "answer"
              value = {option}
              onClick = {()=>HandleAnswer(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </h3>
  </div>
  </div>
  {/* This is the submit button */}
        <div className="Submit">
            <a href="http://google.com">
                <div className="rounded-square">Submit</div>
            </a>
        </div>
      </>
  );
}

export default App;