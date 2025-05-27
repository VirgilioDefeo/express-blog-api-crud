import { Router } from "express";
const router = Router();
import { index, show, create, update, destroy } from "../controllers/postController.js";


// ROTTA ROUTER
// INDEX
router.get("/", index)

//SHOW
router.get("/:id", show)

//Rotta per creare un nuovo post
router.post("/", create);

//rotta per aggiornare un post 
router.put("/:id", update);

// CANCELLO
 router.delete("/:id", destroy);


export default router;
