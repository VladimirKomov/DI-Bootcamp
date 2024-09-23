import React, {useEffect} from "react";
import Phone from "./Phone.jsx";

const Color = () => {

    const [favoriteColor, setFavoriteColor] = React.useState('red');

    useEffect(() => {
        alert("useEffect reached");
    }, []);

    const changeFavoriteColor = () => {
        setFavoriteColor("blue");
    }

    return (
        <div>
            <h1>My favorite color is <em>{favoriteColor}</em></h1>
            <br/>
            <button onClick={changeFavoriteColor}>
                Change color
            </button>
        </div>
    )

}

export default Color;