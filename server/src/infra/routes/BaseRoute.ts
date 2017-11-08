
import { Router } from 'express';

export default abstract class BaseRoute {
    public router: Router;
    public baseURL: string;
    
    constructor(baseURL: string) {
        this.router = Router();
        this.baseURL = baseURL;
        this.init();
    }

    protected abstract init(): void;
}