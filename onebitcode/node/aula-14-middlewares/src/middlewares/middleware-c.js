module.exports = function(req, res, next) {
    console.log('Executando middleware C')
    req.middlewareC = 'OK!'
    next()
}