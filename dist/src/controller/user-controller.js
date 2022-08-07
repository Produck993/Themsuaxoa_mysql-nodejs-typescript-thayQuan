"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_db_1 = require("../model/user-db");
const data_sorce_1 = require("../data-sorce");
class UserController {
    constructor() {
        this.showListUser = async (req, res) => {
            let users = await this.userRepository.find();
            res.render('list', { users: users });
        };
        this.showCreateUser = (req, res) => {
            res.render('create');
        };
        this.createUser = async (req, res) => {
            let files = req.files;
            if (files) {
                let user = req.body;
                if (files.image && user.name) {
                    let image = files.image;
                    image.mv('./public/upload/' + image.name);
                    user.avatar = 'upload/' + image.name;
                    await this.userRepository.save(user);
                    res.redirect(301, '/');
                }
                else {
                    res.render('error');
                }
            }
            else {
                res.render('error');
            }
        };
        this.showFormEdit = async (req, res) => {
            let idupdate = +req.params.id;
            let user = await this.userRepository.findOneBy({ id: idupdate });
            if (user) {
                res.render('edit', { id: user });
            }
        };
        this.editForm = async (req, res) => {
            let id = +req.params.id;
            let user = await this.userRepository.findOneBy(id);
            let files = req.files;
            if (files) {
                let user1 = req.body;
                if (files.image && user1.name) {
                    let image = files.image;
                    image.mv('./public/upload/' + image.name);
                    user.avatar = 'upload/' + image.name;
                    await this.userRepository.save(user);
                }
                else {
                    user1.avatar = user.avatar;
                }
                let reUser = this.userRepository.merge(user, user1);
                await this.userRepository.save(reUser);
                res.redirect(301, '/');
            }
        };
        this.deleteUser = async (req, res) => {
            let id = req.params.id;
            await this.userRepository.delete(id);
            res.redirect(301, '/');
        };
        data_sorce_1.AppDataSorce.initialize().then(connection => {
            this.userRepository = connection.getRepository(user_db_1.User);
        });
    }
}
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map