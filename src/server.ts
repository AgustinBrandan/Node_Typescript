import  express  from 'express';
import morgan from 'morgan'
import cors from 'cors'
import {Router} from "express"
import { UserRouter } from './user/user.router';
import { ConfigServer } from './config/config';


//  Servidor inicial -- ejecucion inicial
class ServerBoostrap extends ConfigServer {
    public app: express.Application = express();
    private port: number = this.getNumberEnv("PORT");
    //Para que la clase se ejecute al inicio.
    constructor(){
        super();
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));

        this.dbConnect();

        this.app.use(morgan('dev'));
        this.app.use(cors());

        this.app.use("/api", this.routers())
        this.listen();
    
      
    }


    routers(): Array<express.Router> {
        return [new UserRouter().router];
    }


      

    public listen () {
        this.app.listen(this.port , () => {
            console.log("Server listening on port " + this.port )
        })
    }
}

new ServerBoostrap();


