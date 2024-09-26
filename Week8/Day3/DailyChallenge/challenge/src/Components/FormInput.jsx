import React, {useState} from 'react';
import '../App.css';
import FormComponent from "./FormComponent.jsx";

const FormInput = () => {
    const [value, setValue] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        destination: '',
        nutsFree: false,
        lactoseFree: false,
        vegan: false
    });
    const changeHandler = (e) => {
        if (e.target.type === 'checkbox') {
            setValue({
                ...value,
                [e.target.name]: e.target.checked
            });
        } else {
            setValue({
                ...value,
                [e.target.name]: e.target.value
            });
        }
    };
    return (
        <>
        <div id="formInput">
            <h1 id="titleForm">Sample form</h1>
            <form>
                <input className="text" type="text" name="firstName" placeholder="Fist Name"
                onChange={(e) => changeHandler(e)} />
                <br/>
                <input className="text" type="text" name="lastName" placeholder="Last Name"
                onChange={(e) => changeHandler(e)} />
                <br/>
                <input className="text" type="number" name="age" placeholder="Age"
                onChange={(e) => changeHandler(e)} />
                <br/>
                <br/>
                <label>
                    <input className="radioButton" type="radio" name="gender" value="male"
                    onChange={(e) => changeHandler(e)} />
                    Male
                </label>
                <br/>
                <label>
                    <input className="radioButton" type="radio" name="gender" value="female"
                    onChange={(e) => changeHandler(e)} />
                    Female
                </label>
                <br/>
                <br/>
                <label>
                    Select your destination
                    <br/>
                    <select name="destination"
                            onChange={(e) => changeHandler(e)}>
                        <option value="">--- Select your destination ---</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Japan">Japan</option>
                        <option value="Brazil">Brazil</option>
                    </select>
                </label>
                <br/>
                <br/>
                <label>
                    Dietary restrictions:
                    <br/>
                </label>
                    <input type="checkbox" name="nutsFree"
                    onChange={(e) => changeHandler(e)}/>
                    Nuts Free
                    <br/>
                    <input type="checkbox" name="lactoseFree"
                    onChange={(e) => changeHandler(e)}/>
                    Lactose Free
                    <br/>
                    <input type="checkbox" name="vegan"
                    onChange={(e) => changeHandler(e)}/>
                    Vegan
                <br/>
                <br/>
                <button className="submit" type="Submit">Submit</button>

            </form>
        </div>
            <FormComponent inputs={value}/>
        </>
    )
}

export default FormInput;