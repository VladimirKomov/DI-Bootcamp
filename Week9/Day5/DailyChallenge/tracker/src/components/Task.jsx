import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

const Task = ({ task, onEdit, onComplete }) => {
    return (
        <Card className="mb-3" border="dark">
            <Card.Body>
                <Card.Title>{task.title}.</Card.Title>
                <Card.Text>Description: {task.description}.</Card.Text>
                <Card.Text>Category: {task.categoryName}.</Card.Text>
                <Card.Text>Status: {task.status}.</Card.Text>
                <Card.Text>Created on: {new Date(task.dateCreated).toLocaleString()}.</Card.Text>
                <Button variant="primary" onClick={onEdit} className="me-2">
                    Edit
                </Button>
                <Button variant="success" onClick={onComplete}>
                    Mark as Completed
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Task;
