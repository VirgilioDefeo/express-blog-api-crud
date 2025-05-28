import express from "express";
import postsRouter from "./routers/posts.js";
import loggingMiddleWare from "./middlewares/loggingMiddleWare.js"
import routeGroupeMiddleware from "./middlewares/routeGroupeMiddleware.js"
import routeNotFound from "./middlewares/roteNotFound.js"
import errorHendler from "./middlewares/errorHendler.js"


const app = express();
const port = 4000;



app.use(express.json());

app.use(express.static("public"));
//resgistratio a livell globale
app.use(loggingMiddleWare);
app.use("/posts", loggingMiddleWare, postsRouter);
app.use(routeNotFound);
app.use(errorHendler);




app.get("/", (req, res) => {
    res.json({
        data: "sto esportando"
    });
});


app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const index = posts.findIndex(post => post.id === postId);

  if (index === -1) {
    return res.status(404).json({ error: 'Post non trovato' });
  }

  // Aggiorna solo i campi forniti
  posts[index] = {
    ...posts[index],
    ...req.body
  };

  res.json(posts[index]);
});



app.listen(port, () => {
    console.log("server in ascolto");

});
