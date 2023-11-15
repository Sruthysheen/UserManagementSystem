import  express  from "express"
import { editUser, listUser, login, logout } from "../controllers/adminControler.js"


const router =express()


router.post('/login',login)
router.post('/logout',logout)
router.get('/listUser',listUser)
router.post('/editUser',editUser)




export default router