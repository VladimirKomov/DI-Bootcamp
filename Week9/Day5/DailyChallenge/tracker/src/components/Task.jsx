import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { TASK_STATUS } from '../constants/taskStatus.js';

const Task = ({ task, onEdit, onStatusChange  }) => {
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
                <Form.Select
                    className="mt-3"
                    value={task.status}
                    onChange={(e) => onStatusChange(task.id, e.target.value)}>
                    <option value={TASK_STATUS.NOT_STARTED}>Not Started</option>
                    <option value={TASK_STATUS.IN_PROGRESS}>In Progress</option>
                    <option value={TASK_STATUS.COMPLETED}>Completed</option>
                    <option value={TASK_STATUS.CANCELLED}>Cancelled</option>
                </Form.Select>
            </Card.Body>
        </Card>
    );
};

export default Task;
