import { Request, Response } from "express";
declare class UserController {
    private userRepository;
    constructor();
    showListUser: (req: Request, res: Response) => Promise<void>;
    showCreateUser: (req: Request, res: Response) => void;
    createUser: (req: any, res: Response) => Promise<void>;
    showFormEdit: (req: Request, res: Response) => Promise<void>;
    editForm: (req: Request, res: Response) => Promise<void>;
    deleteUser: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
