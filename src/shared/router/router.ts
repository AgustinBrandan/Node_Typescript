import {Router} from "express"

export class BaseRouter<T> { // T Controlador 
    public router: Router;
    public controller: T
    //public middleware: UIEvent;
    constructor(TController: {new ():T}){
        this.router = Router()
        this.controller = new TController();
        this.routes();
    }

    routes() {}

}  
