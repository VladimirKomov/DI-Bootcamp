import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../redux/ageSlice';

const AgeControls = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.ageStore.loading);
    const [years, setYears] = useState(1);

    return (
        <div>
            <input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                min="1"
            />
            <button onClick={() => dispatch(ageUpAsync(years))} disabled={loading}>
                Age Up
            </button>
            <button onClick={() => dispatch(ageDownAsync(years))} disabled={loading}>
                Age Down
            </button>
        </div>
    );
};

export default AgeControls;