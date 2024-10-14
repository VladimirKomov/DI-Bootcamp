import './App.css'
import Greeting from "./components/Greeting.tsx";
import Counter from "./components/Counter.tsx";
import UserCard from "./components/UserCard.tsx";
import Posts from "./components/Posts.tsx";

function App() {

  return (
    <>
        <Greeting name={'Ziv'}/>
        <Counter/>
        <UserCard/>
        <UserCard name='Vova' age={18} />
        <Posts/>
    </>
  )
}

export default App
