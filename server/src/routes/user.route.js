import { Router } from "express";
import {
  deleteUser,
  getUserListings,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/verifyUser.js";

const router = Router();

router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListings);
router.get("/:id", verifyToken, getUsers);

export default router;
