import React from 'react';
import { useSelector } from 'react-redux';
import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/vite.svg';
import '../App.css';
import { ClipLoader } from 'react-spinners';

const AgeDisplay = () => {
    const age = useSelector((state) => state.ageStore.age);
    const loading = useSelector((state) => state.ageStore.loading);

    return (
        <div>
            <h1>Age: {age}</h1>
            {loading &&
                <>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo"/>
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo"/>
                    </a>
                    <div>
                    <ClipLoader color={"#123abc"} loading={loading} size={50} />
                    <p>Wait...</p>
                    </div>
                </>
            }
        </div>
    );
};

export default AgeDisplay;