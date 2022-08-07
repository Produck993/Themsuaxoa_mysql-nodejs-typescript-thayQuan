import express from "express";
import UserController from "../controller/user-controller"


export const routes = express.Router();
routes.get('/',UserController.showListUser)
routes.get('/create',UserController.showCreateUser)
routes.post('/create',UserController.createUser)
routes.get('/edit/:id',UserController.showFormEdit)
routes.post('/edit/:id',UserController.editForm)
routes.get('/delete/:id',UserController.deleteUser)