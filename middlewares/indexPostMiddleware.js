function indexPostMiddleware(req, res, next) {
    console.log("sono middleware che si attiva solo nell index dei post");
    next()
    
}

export default indexPostMiddleware