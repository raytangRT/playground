import BaseRoute from './BaseRoute';
import { Album } from '../../domain/entity/Album';
import { Request, Response, NextFunction } from 'express';
import { EntityManager, createConnection, getManager } from 'typeorm';

export default class AlbumRouter extends BaseRoute {

    constructor() {
        super('/api/v1/album');
    }

    protected init() {
        this.router.get('/listAll', this.listAllAlbum);
        this.router.get('/list/:Id', this.listById);
    }

    private async listAllAlbum(res: Response) {
        const albums: Album[] = await getManager().find(Album);
        res.json(albums);
    }

    private async listById(req: Request, res: Response) {
        const id: string = req.params['Id'];
        const album: Album = await getManager().findOneById(Album, id);
        res.json(album);
    }
}
