import  express  from "express"
import { deletUser, editUser, listUser, login, logout,searchUser} from "../controllers/adminControler.js"


const router =express()


router.post('/login',login)
router.post('/logout',logout)
router.get('/listUser',listUser)
router.post('/editUser',editUser)
router.post('/deletUser',deletUser)
router.post('/searchUser',searchUser)



export default router