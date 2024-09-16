import {createData, deleteData, fetchData, fetchDataById, updateData} from "../models/requestDb.js";
import * as console from "node:console";


export const getAllPosts = async (req, res) => {
    try {
        const data = await fetchData();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getPostById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await fetchDataById(id);
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const createPost = async (req, res) => {
    try {
        const data = req.body;
        await createData(data);
        res.status(201).json({ message: "Post created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updatePost = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        console.log(`put id=${id} data=${data}`);
        await updateData(id, data);
        res.status(200).json({ message: "Post updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(`del id=${id}`);
        await deleteData(id);
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

