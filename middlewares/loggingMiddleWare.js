
function loggingMiddleWare(req, res, next) {
    const url = req.url.originalURL;
    const time = new Date().toLocaleString("IT");
    console.log(`${url} in ${time}`);
    
    console.log(`[URL della rotta] alle [orario] `);
        // la funzione che manda la richiesta della risposta successiva 
        next()
};






















export default loggingMiddleWare