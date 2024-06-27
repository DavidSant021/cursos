const authMiddleware = (req, res, next) => {
    if (req.session.authenticated) {
        next()
    } else {
        res.redirect('/')
    }
}

const ensureUserIsAdmin = (req, res, next) => {
    if (req.session.currentUser.role !== 'admin') {
        return res.redirect('/dashboard')
    }

    next()
}

module.exports = { authMiddleware, ensureUserIsAdmin }