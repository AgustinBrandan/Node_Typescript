import  express  from 'express';
import morgan from 'morgan'
import cors from 'cors'
import {Router} from "express"
import { UserRouter } from './router/user.router';
import { ConfigServer } from './config/config';
import { Connection, createConnection } from 'typeorm'

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

    
    async dbConnect(): Promise<Connection> {
        try {
          const connection = await createConnection(this.typeORMConfig);
          console.log("Conexión a la base de datos establecida");
          return connection;
        } catch (error) {
          console.error("Error al conectar a la base de datos:", error);
          throw error;
        }
      }
      

    public listen () {
        this.app.listen(this.port , () => {
            console.log("Server listening on port " + this.port )
        })
    }
}

new ServerBoostrap();


