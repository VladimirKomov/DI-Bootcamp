import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../redux/ageSlice';

const AgeControls = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.ageStore.loading);

    return (
        <div>
            <button onClick={() => dispatch(ageUpAsync())} disabled={loading}>
                Age Up
            </button>
            <button onClick={() => dispatch(ageDownAsync())} disabled={loading}>
                Age Down
            </button>
        </div>
    );
};

export default AgeControls;