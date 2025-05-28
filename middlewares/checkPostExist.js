import { posts } from "../controllers/postController.js";

function checkPostExist(req, res, next) {
    const post = posts.find(p => p.id === parseInt(req.params.id)); 
    if(!post) {
        res.status(404).json({message: "Post non trovato!"})
       
    }
    next()
}

export default checkPostExist