import { Router } from "express";
const router = Router();
import { index, show, create, update, destroy } from "../controllers/postController.js";
import indexPostMiddleware from "../middlewares/indexPostMiddleware.js";
import checkPostExist from "../middlewares/checkPostExist.js";
import validatePost from "../middlewares/validatePost.js";


// ROTTA ROUTER
// INDEX
 router.get("/", indexPostMiddleware, index)

//SHOW
router.get("/:id", checkPostExist, show)

//Rotta per creare un nuovo post
router.post("/", validatePost, create);

//rotta per aggiornare un post 
router.put("/:id", checkPostExist, validatePost, update);

// CANCELLO
 router.delete("/:id", checkPostExist, destroy);


export default router;
