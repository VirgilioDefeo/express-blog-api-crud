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




app.listen(port, () => {
    console.log("server in ascolto");

});
