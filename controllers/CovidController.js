import Covid from "../models/CovidModel.js";
import { validationResult } from "express-validator";

export const getCovids = async(req, res) =>{
    try {
        const response = await Covid.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getCovidById = async(req, res) =>{
    try {
        const response = await Covid.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createCovid = async(req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        await Covid.create(req.body);
        res.status(201).json({msg: "Covid Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateCovid = async(req, res) =>{
    
    try {
        await Covid.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Covid Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteCovid = async(req, res) =>{
    try {
        await Covid.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Covid Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}