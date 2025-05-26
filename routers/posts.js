import { Router } from "express";
const router = Router();
import { index, show, destroy } from "../controllers/postController.js";


// ROTTA ROUTER
// INDEX
router.get("/", index)

//SHOW
router.get("/:id", show)



// CANCELLO
 router.delete("/:id", destroy);


export default router;
