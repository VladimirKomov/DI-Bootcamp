import {useState} from 'react';
import './App.css';
import {Route, NavLink, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Nav, Navbar} from "react-bootstrap";
import HomeScreen from "./Components/HomeScreen.jsx";
import ProfileScreen from "./Components/ProfileScreen.jsx";
import ShopScreen from "./Components/ShopScreen.jsx";
import ErrorBoundary from "./Components/ErrorBoundary.jsx";
import PostList from "./Components/PostList.jsx";
import Example1 from "./Components/Example1.jsx";
import Example2 from "./Components/Example2.jsx";
import Example3 from "./Components/Example3.jsx";
import fetchData from "./Components/FetchData.js";
import data from "bootstrap/js/src/dom/data.js";


function App() {
    const [count, setCount] = useState(0);

    const sendData = async () => {
        const url = 'https://webhook.site/814073fa-c9f1-4068-9c65-9f8a1e032a0b';
        const data = {
            key1: 'myusername',
            email: 'mymail@gmail.com',
            name: 'Isaac',
            lastname: 'Doe',
            age: 27
        }
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const jsonRes = await response.json();
            console.log('Response: ', jsonRes);
        } catch (error) {
            console.log('Error sending data: ', error);
        }
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
                    <Nav.Link as={NavLink} to="/shop">Shop</Nav.Link>
                </Nav>
            </Navbar>

            <div className="container mt-4">
                <ErrorBoundary>
                    <Routes>
                        <Route path="/" element={<HomeScreen/>}/>
                        <Route path="/profile" element={<ProfileScreen/>}/>
                        <Route path="/shop" element={<ShopScreen/>}/>
                    </Routes>
                </ErrorBoundary>
            </div>
            <br/>
            <br/>
            <PostList/>
            <br/>
            <br/>
            <Example1/>
            <br/>
            <br/>
            <Example2/>
            <br/>
            <br/>
            <Example3/>
            <br/>
            <br/>
            <div className="container mt-4">
                <Button onClick={sendData}>Send some data</Button>
            </div>
        </>
    );
}

export default App;