import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ageDownAsync, ageUpAsync} from '../redux/ageSlice.js';
import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/vite.svg';
import '../App.css';

const AgeCounter = () => {
    const dispatch = useDispatch();
    const {age, loading} = useSelector((state) => state.ageStore);

    console.log('Rendered age:', age);

    return (
        <div className="age-counter-container">
            {loading &&
                <>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo"/>
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo"/>
                    </a>
                </>
            }
            <br/>
            <h2>Age: {age}</h2>
            <button onClick={() => dispatch(ageUpAsync())} disabled={loading}>
                Age Up
            </button>
            <button onClick={() => dispatch(ageDownAsync())} disabled={loading}>
                Age Down
            </button>
        </div>
    );
};

export default AgeCounter;
