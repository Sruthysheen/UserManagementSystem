
import  express from 'express'
import { authUser, createUser, getUser, loginUser, logoutUser, updateUser } from '../controllers/useController.js';
import { protect } from '../middleware/authMiddleware.js';
const router=express();


router.post('/auth',authUser)
router.post('/createUser',createUser)
router.post('/loginUser',loginUser)
router.post('/updateUser',protect,updateUser)
router.post('/logout',logoutUser)
router.get('/getUser',protect,getUser)
export default router