import { UserDomainService } from '../../domain/service/UserDomainService';
import { User } from '../../domain/entity/User';
import BaseRoute from './BaseRoute';
import { Request, Response } from 'express';
import { Service } from "typedi"
import { AuthenticationService } from '../../domain/service/AuthenticationService';

@Service()
export class UserRoute extends BaseRoute {

    constructor(private userDomainService: UserDomainService,
        private authenticationService: AuthenticationService) {
        super('/api/v1/user');
    }

    protected init() {
        this.router.get('/listAll', this.listAll.bind(this));
        this.router.post('/register', this.register.bind(this));
        this.router.post('/login', this.login.bind(this));
        this.router.post('/logout', this.logout.bind(this));
    }

    private async listAll(req: Request, res: Response) {
        const users: User[] = await this.userDomainService.getUsers();
        res.json(users);
    }

    private async register(req: Request, res: Response) {
        const user: User = await this.userDomainService.addUser(<User>req.body);
        res.json(user);
    }

    private login(req: Request, res: Response) {
        const user = <User>req.body;
        this.userDomainService.login(user.userName, user.password)
            .then(authInfo => {
                const token = this.authenticationService.generateToken(authInfo);

                res.cookie('auth', true)
                    .cookie('token', token)
                    .json({
                        status: "success"
                    });

            }).catch(e => {
                res.json({ status: e });
            });
    }

    private logout(req: Request, res: Response) {
        const user = <User>req.body;

        this.userDomainService.logout(user.userName);

        res.clearCookie('auth')
            .clearCookie('token')
            .json({
                status: "success"
            });
    }
}
