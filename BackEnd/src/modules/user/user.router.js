import { Router } from "express";
import * as userController from "./controller/user.js"
import { auth, authAdmin } from "../../middleWare/auth.middleWare.js";
const router = Router();



router.get("/", auth, authAdmin, userController.getAllUser)
router.delete("/:id", userController.deleteUser)




export default router