import { Router } from "express";

import { userController } from "../controllers/user.controller";

const router = Router();

router.get("/", userController.getList);
router.post("/", userController.create);
// router.delete('/:id', userController.deleteById);
// router.get('/:id',userController.getById);

export const userRouter = router;
