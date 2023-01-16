import express from "express";
import {
    getCovids, 
    getCovidById,
    createCovid,
    updateCovid,
    deleteCovid
} from "../controllers/CovidController.js";
import { check } from "express-validator";
const router = express.Router();

router.get('/covids', getCovids);
router.get('/covids/:id', getCovidById);
router.post('/covids',   [
    check("provinsi")
    .notEmpty(),
    check("kasus")
    .notEmpty(),
    check("kasusHarian")
    .notEmpty(),
    check("sembuh")
    .notEmpty(),
    check("sembuhHarian")
    .notEmpty(), 
    check("kematian")
    .notEmpty(),
    check("meninggalHarian")
    .notEmpty(),
    check("RI")
    .notEmpty(),
    check("CFR")
    .notEmpty(),
    check("RasioLacak")
    .notEmpty(),
  ],createCovid);
router.patch('/covids/:id', updateCovid);
router.delete('/covids/:id', deleteCovid);

export default router;