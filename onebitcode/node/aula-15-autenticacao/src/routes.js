const express = require('express')
const dashboardController = require('./controllers/dashboardController')
const authController = require('./controllers/authController')
const { authMiddleware, ensureUserIsAdmin } = require('./middlewares/authMiddleware')

const router = express.Router()

router.get('/', authController.index)
router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)
router.get('/auth/logout', authMiddleware, authController.logout)

router.get('/dashboard', authMiddleware, dashboardController.dashboard)
router.get('/dashboard/users', authMiddleware, ensureUserIsAdmin, dashboardController.users)

module.exports = router