import React from "react";
import {useSelector} from "react-redux";
import {selectCategories} from "../redux/categoriesSelector.js";

const CategorySelector = ({onSelectCategory}) => {
    const categories = useSelector(selectCategories);

    return (
        <select onClick={(e) => onSelectCategory(e.target.value)}>
            <option value="">All</option>
            {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.title}</option>
            ))}
        </select>
    )
}

export default CategorySelector;