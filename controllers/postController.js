export const posts = [
    {
        "id": 1,
        "title": "ciambellone 123",
        "content": "alimentare",
        "Image": "/images/ciambellone.jpeg",
        "tags": []
    },
    {
        "id": 2,
        "title": "cracker_barbabietola",
        "content": "alimentare",
        "Image": "/images/cracker_barbabietola.jpeg",
        "tags": []
    },
    {
        "id": 3,
        "title": "pane_fritto_dolce",
        "content": "alimentare",
        "Image": "/images/pane_fritto_dolce.jpeg",
        "tags": []
    },
    {
        "id": 4,
        "title": "pasta_barbabietola",
        "content": "alimentare",
        "Image": "/images/pasta_barbabietola.jpeg",
        "tags": []
    },
    {
        "id": 5,
        "title": "torta_paesana",
        "content": "alimentare",
        "Image": "/images/torta_paesana.jpeg",
        "tags": []
    }
];

//index 
export const index = (req, res) => {
    res.json(posts);
};



// Show - Restituisce un singolo post
export const show = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: "Post non trovato" });
    }
};



// Destroy - Elimina un post
export const destroy = (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);
    
    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        console.log("Lista aggiornata:", posts);
        res.status(204).end();
    } else {
        res.status(404).json({ message: "Post non trovato" });
    }
};