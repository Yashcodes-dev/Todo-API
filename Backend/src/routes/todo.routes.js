import {Router} from "express"
import {addTodo, deleteTodo, getTodo, updateTodo} from "../controllers/todo.controller.js"

const router = Router();

router.route('/').post(addTodo)
router.route('/').get(getTodo)
router.route('/:id').patch(updateTodo)
router.route('/:id').delete(deleteTodo)




export default router

