import express from "express"
import { deleteId, findAll, findBybody, findbyId, login, signup, update } from "../controller/useController.js"
import midleware from "../middleware/userMiddleware.js"
// import { use } from "react"
const userRouter = express.Router()
// userRouter.post("/signup",signup)
userRouter.post("/signup",signup)
userRouter.post("/login",login)
userRouter.get("/findAll",midleware,findAll)
userRouter.get("/Findbyid/:id",findbyId)
userRouter.post("/Findbybody",findBybody)
userRouter.put("/update/:id",update)
userRouter.delete("/delete/:id",deleteId)
export default userRouter;