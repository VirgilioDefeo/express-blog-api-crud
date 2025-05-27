import express from "express";
import postsRouter from "./routers/posts.js";
const app = express();
const port = 4000;


app.use(express.json());

app.use(express.static("public"));

app.use("/posts", postsRouter);

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
