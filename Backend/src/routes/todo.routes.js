import {Router} from "express"
import {addTodo, getTodo} from "../controllers/todo.controller.js"

const router = Router();

router.route('/').post(addTodo)
router.route('/').get(getTodo)




export default router

