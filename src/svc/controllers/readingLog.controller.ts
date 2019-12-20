import { Router, Request, Response } from 'express';
import { ReadingLog, ReadingEntry } from 'models';
import { ReadingLogService } from '../services';

/**
 * This class wraps acts as kindof a factory for creating and configuring
 * an Express router for performing the CRUD behavior for reading logs.
 * configuration.
 *
 * @author Union Hills Software
 * @date   November 20, 2018
 *
 */

export class ReadingLogController {
    constructor(
        private readonly router: Router = Router(),
        private readonly readingLogSvc: ReadingLogService = new ReadingLogService()
    ) {
        this.setupRoutes();
    }

    /**
     * Sets up typical routes for getting many items or getting one item with an id.
     *
     */
    private setupRoutes() {
        this.router.get('/', (req: Request, res: Response) => this.getReadingLogs(req, res));
        this.router.get('/:id', (req: Request, res: Response) => this.getReadingLog(req, res));
    }

    /**
     * Retrieves all the reading logs.  This is not something a teacher or student
     * will ever need to do.  The only possible use case for this would be for
     * an application adminstrator.
     *
     */
    private getReadingLogs(req: Request, res: Response) {
        const readingLogs: ReadingLog[] = this.readingLogSvc.getReadingLogs();

        return res.json(readingLogs);
    }

    private getReadingLog(req: Request, res: Response) {
        const id = req.params.id;
        const readingLog: ReadingLog = this.readingLogSvc.getReadingLog(id);

        return res.json(readingLog);
    }

    public getRouter(): Router {
        return this.router;
    }
}