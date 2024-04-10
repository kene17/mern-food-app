import express from "express";
import UserController from "../controller/UserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";
const router = express.Router();

//jwtParse to get tokens and id
router.get("/", jwtCheck, jwtParse, UserController.getCurrentUser);
router.post("/", jwtCheck, UserController.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  UserController.updateCurrentUser
);

export default router;
