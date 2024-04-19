import { Router } from "express";
import {
  createListing,
  deleteListing,
  getListings,
  getSearchListings,
  updateListing,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../middlewares/verifyUser.js";

const router = Router();

router.post("/create", verifyToken, createListing);
router.delete("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, updateListing);
router.get("/get/:id", getListings);
router.get("/get", getSearchListings);

export default router;
