import React from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../redux/categoriesSelector.js";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const CategorySelector = ({ onSelectCategory }) => {
    const categories = useSelector(selectCategories);

    return (
        <Form.Group className="mb-3" controlId="categorySelector">
            <Form.Label>Select Category</Form.Label>
            <Form.Select onChange={(e) => onSelectCategory(e.target.value)}>
                <option value="">All Categories</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.title}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>
    );
}

export default CategorySelector;
