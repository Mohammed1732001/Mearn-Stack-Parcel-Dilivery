import { Router } from "express";

const router = Router();

import * as authController from "./controller/auth.js"


router.get("/" ,authController.authModule )

router.post("/" , authController.signUp) 





export default router