import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from "./UserFavoriteAnimals";
import Exercise from "./Exercise3";

//1//////////////////////////////////////////////////////////////////////////
// In the App.js file, display a “Hello World!” message in a paragraph.
// Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;, and render it on the page.
// Create a constant variable named sum, which value is 5 + 5. Render on the page, the following sentence
// "React is <sum> times better with JSX"


const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5;

//2/////////////////////////////////////////////////////////////////////////
// Using the following object:
//
//     const user = {
//         firstName: 'Bob',
//         lastName: 'Dylan',
//         favAnimals : ['Horse','Turtle','Elephant','Monkey']
//     };
// In the App.js file, render the first name and the last name of the user in two <h3>.
// In a separate Javascript file named UserFavoriteAnimals.js, create a new Class Component called UserFavoriteAnimals. Use props to pass the favAnimals array to the UserFavoriteAnimals component.
//     In the UserFavoriteAnimals component, use the map method to create <li> tags in a <ul> tag.
//     Each <li> corresponds to one animal from the favAnimals array.
//     Display the <li> tags. Tip : You can use the second parameter of the map function as a key to uniquely identify each HTML item

const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
};


function App() {
  return (
      <div>
          {myelement}
          <p><p>React is {sum} times better with JSX</p></p>

            <h3>First Name: {user.firstName}</h3>
            <h3>Last Name: {user.lastName}</h3>
            {/* Используем компонент UserFavoriteAnimals и передаем props */}
            <UserFavoriteAnimals favAnimals={user.favAnimals}/>
          <Exercise />
      </div>
  )

}

export default App;

