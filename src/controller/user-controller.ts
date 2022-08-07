import { User } from "../model/user-db";
import { AppDataSorce } from "../data-sorce";
import {Request, response, Response} from "express";
import {UploadedFile} from "express-fileupload"

class UserController {
    
    private userRepository : any;
    constructor() {
        AppDataSorce.initialize().then(connection => {
            this.userRepository = connection.getRepository(User)
        })
        
    }

    showListUser  = async (req :Request ,res : Response)  => { 
        let users = await this.userRepository.find();
        res.render('list', { users: users});
    }

    showCreateUser = (req : Request,res : Response) => {
        res.render('create')
    }

    createUser = async (req : any ,res : Response )=> {
        let files = req.files ;
        // console.log(files)
        if(files) {
            // console.log(files)
            let user = req.body
            if ( files.image && user.name) {
                // console.log(user)
                let image = files.image as UploadedFile
                image.mv('./public/upload/' + image.name)
                user.avatar = 'upload/' + image.name
                await this.userRepository.save(user)
                res.redirect(301,'/')
            } else {
                res.render('error')
            }
        } else {
            res.render('error')
        }
    }
    
    showFormEdit = async (req : Request ,res : Response) => {
      let idupdate = +req.params.id
      let user = await this.userRepository.findOneBy({id : idupdate});
        if(user) {
            res.render('edit',{id : user})
        }
    }
    editForm = async (req : Request ,res : Response) => {
        let id = +req.params.id
        let user = await this.userRepository.findOneBy(id);
        let files = req.files ;

        if(files) {
            let user1 : User = req.body
            if (files.image && user1.name) {
                let image = files.image as UploadedFile
                image.mv('./public/upload/' + image.name)
                user.avatar = 'upload/' + image.name
                await this.userRepository.save(user)
            } else {
                user1.avatar= user.avatar
            }
            let reUser = this.userRepository.merge(user,user1)
            await this.userRepository.save(reUser);
            res.redirect(301,'/')
            
        }
    }
    deleteUser = async(req:Request,res:Response) => {
        let id = req.params.id
     await this.userRepository.delete(id)
     res.redirect(301,'/')
        
}
}

export default new UserController()