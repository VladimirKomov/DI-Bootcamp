import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../features/dataStore';
import { createRandomRecipeOptions } from '../api/configApi';
import { RequestOptions } from '../types/typesRequest';
import { fetchDataSlice } from '../features/dataSlice';
import './style.css';


const DataFetcher: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const data = useSelector((state: RootState) => state.data.data);
    const status = useSelector((state: RootState) => state.data.status);
    const error = useSelector((state: RootState) => state.data.error);

    useEffect(() => {
        const options: RequestOptions = createRandomRecipeOptions();
        dispatch(fetchDataSlice(options));
    }, [dispatch]);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'failed') {
        return <p>Error: {error}</p>;
    }

    if (!data || !data.recipes || data.recipes.length === 0) {
        return <p>No recipes available</p>;
    }

    return (
        <div>
            {data.recipes.map((recipe) => (
                <div key={recipe.id} className="recipe-container">
                    <h2>{recipe.title}</h2>
                    <img src={recipe.image} alt={recipe.title} />
                    <p><strong>Ready in:</strong> {recipe.readyInMinutes} minutes</p>
                    <p><strong>Servings:</strong> {recipe.servings}</p>
                    <p><strong>Vegetarian:</strong> {recipe.vegetarian ? 'Yes' : 'No'}</p>
                    <p><strong>Vegan:</strong> {recipe.vegan ? 'Yes' : 'No'}</p>
                    <p><strong>Gluten Free:</strong> {recipe.glutenFree ? 'Yes' : 'No'}</p>
                    <p><strong>Dairy Free:</strong> {recipe.dairyFree ? 'Yes' : 'No'}</p>

                    <h3>Instructions:</h3>
                    <div className="instructions" dangerouslySetInnerHTML={{ __html: recipe.instructions }} />

                    <h3>Ingredients:</h3>
                    <ul>
                        {recipe.extendedIngredients.map((ingredient, index) => (
                            <li key={index}>
                                <p>{ingredient.original}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default DataFetcher;
