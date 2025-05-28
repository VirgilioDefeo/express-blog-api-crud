function validatePost(req, res, next) {
    const postData = req.body;
    const tuttiPostEsistono = postData.title !== undefined && postData.tags !== undefined && postData.price !== undefined;
    const priceIsNumber = typeof postData.price === "number";
    console.log("prezzo è numero", priceIsNumber, typeof postData.price);
    if(tuttiPostEsistono === false || priceIsNumber === false) {
        res.status(400);
        return res.json({
            error: "dati inviati non sono validi!"
        })
    } else {
        next()
    }
}


export default validatePost