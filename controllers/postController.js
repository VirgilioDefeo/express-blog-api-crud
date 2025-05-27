export const posts = [
    {
        "id": 1,
        "title": "ciambellone 123",
        "content": "alimentare",
        "Image": "/images/ciambellone.jpeg",
        "tags": ["liga", "calcio", "pistole"],
        "price": 14
    },
    {
        "id": 2,
        "title": "cracker_barbabietola",
        "content": "alimentare",
        "Image": "/images/cracker_barbabietola.jpeg",
        "tags": ["liga", "calcio", "pistole"],
        "price": 12
    },
    {
        "id": 3,
        "title": "pane_fritto_dolce",
        "content": "alimentare",
        "Image": "/images/pane_fritto_dolce.jpeg",
        "tags": ["liga", "calcio", "pistole"],
        "price": 9
    },
    {
        "id": 4,
        "title": "pasta_barbabietola",
        "content": "alimentare",
        "Image": "/images/pasta_barbabietola.jpeg",
        "tags": ["liga", "calcio", "pistole"],
        "price": 30
    },
    {
        "id": 5,
        "title": "torta_paesana",
        "content": "alimentare",
        "Image": "/images/torta_paesana.jpeg",
        "tags": ["liga", "pallavolo", "pistole"],
        "price": 10
    }
];
const sendNotFound = (res) => {
   return sendNotFound(res)
}
//index 
export const index = (req, res) => {
    const postFilter = req.query.tags;
    const maxPriceFilter = req.query.maxPrice
    let result = posts;
    if(postFilter !== undefined && maxPriceFilter !== undefined) {
//filtro per entrambi
    } else if (posts.Filter !== undefined) {
// filtro per ingredienti
    } else if (maxPriceFilter !== undefined) {
    } // filtto per prezzo


    if(postFilter !== undefined) {
        console.log(postFilter);
        
        result = posts.filter((curPost) => curPost.tags.includes(postFilter));
        console.log(result);
    }

    res.json({
        data: result,
        count: result.length
    });
};

 const store = (req, res) => {
    console.log("Request Body:", req.body);
     const newPost = req.body
     const lastId = parseInt(postsArray[postsArray.length -1].id)
     newPost.id = (lastId + 1).toString();
posts.push(newPost)
return res.status(201).json(newPost)
     res.json({
        data: "Aggiungo una pizza"
     })
    }

// Show - Restituisce un singolo post
export const show = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    
    if (post) {
        res.json(post);
    } return sendNotFound(res)
};

// Create - Crea un nuovo post
export const create = (req, res) => {
    const { title, content } = req.body;
    
    if (!title || !content) {
        return res.status(400).json({ message: "Title e content sono obbligatori" });
    }
    
    const newPost = {
        id:
        title,
        content
    };
    
    posts.push(newPost);
    res.json({ message: "post creato!", post: newPost})
};


// Update - Aggiorna un post esistente
export const update = (req, res) => {
    const postId = parseInt(req.params.id);

    const { title, content } = req.body;
    const post = posts.find((curPost) => curPost.id === postId);
    if(!post) {
        return sendNotFound(res)
    }
    post.name = postId.name;
    post.image = postId.image;
    post.content = postId.content
    console.log("body ricevuto");
    
    const postIndex = posts.findIndex(p => p.id === postId);
    
    if (postIndex === -1) {
        return sendNotFound(res)
    }
    
    if (!title || !content) {
        return res.status(400).json({ message: "Title e content sono obbligatori" });
    }
    
    const updatedPost = {
        id: postId,
        title,
        content
    };
    
    posts[postIndex] = updatedPost;
    res.json(updatedPost);
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
        return sendNotFound(res);
    }
};