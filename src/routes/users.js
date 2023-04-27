import express from "express";
import { getUsers, postUser, putUser, delUser } from "../controllers/users.js"

const router = express.Router()

router.get("/", getUsers)
router.post("/", postUser)
router.put("/:id", putUser)
router.delete("/:id", delUser)

export default router