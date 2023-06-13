// import logo from './logo.svg';
import './App.css';
// import Personal from "./components/PersonalInfo";
// import Contact from "./components/ContactInfo";
// import Skills from "./components/skills";
// import BioData from './components/BioData';
// import {Counter} from "./components/Counter";
import {ToDoApp} from "./components/ToDoApp";

// const allBioData = [
//   {
//     id: "1",
//     name: "Jamil",
//     age: 27,
//     mail: "jamil@gmail.com",
//     phone: "123-456-",
//     skills: ["html", "css", "js"]
//   }
// ]

function App() {
  return (
    <div className="App">
      
      {/* {allBioData.map( (singlePerson) => (
        <BioData key={singlePerson.id} name={singlePerson.name}>
          <Personal
              name={singlePerson.name}
              age={singlePerson.age}
          />
          <Contact
              mail={singlePerson.mail}
              phone={singlePerson.phone}
          />
          <Skills
              skills={singlePerson.skills}
          />
          <hr />
        </BioData>        
      ) )} */}
      {/* <Counter/> */}
      {/* <hr /> */}
      <ToDoApp/>
      <hr />
    </div>
  );
}

export default App;
