import express from "express";
import { v4 as uuidv4 } from "uuid";
import { createUser, deleteById, getById, getUsers, updateById } from "../controllers/users.js";

const router = express.Router();



router.get("/", getUsers );

router.post("/",createUser );

router.get("/:id",getById );

router.delete("/:id", deleteById );

router.patch("/:id",updateById );

export default router;
