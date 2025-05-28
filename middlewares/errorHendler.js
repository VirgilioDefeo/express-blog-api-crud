function errorHendler(req, res, next) {
    res.status(500).json({
        error: "errore interno del server"
    })
}
export default errorHendler