import { Router, Request, Response } from 'express';
import { Student, ReadingLog } from 'models';
import { StudentService } from '../services';

/**
 * This class wraps acts as kindof a factory for creating and configuring
 * an Express router for performing the CRUD behavior for reading logs.
 * configuration.
 *
 * @author Union Hills Software
 * @date   November 20, 2018
 *
 */

export class StudentController {
    constructor(
        private readonly router: Router = Router(),
        private readonly studentSvc: StudentService = new StudentService()
    ) {
        this.setupRoutes();
    }

    /**
     * Sets up typical routes.. get all, get one. We also enable the ability
     * to retrieve a student's reading log for a particular class section.
     *
     */
    private setupRoutes() {
        this.router.get('/', (req: Request, res: Response) => this.getStudents(req, res));
        this.router.get('/:id', (req: Request, res: Response) => this.getStudent(req, res));
        this.router.get('/:studentId/sections/:sectionId/readinglog',
                        (req: Request, res: Response) => this.getStudentReadingLog(req, res));
    }

    /**
     * Retrieves all the students. There is no use case for this other than
     * perhaps that of an application administrator.
     *
     */
    private getStudents(req: Request, res: Response) {
        const students: Student[] = this.studentSvc.getStudents();

        return res.json(students);
    }

    /**
     * Retrieves a single student by id.
     *
     */
    private getStudent(req: Request, res: Response) {
        const id = req.params.id;
        const student: Student = this.studentSvc.getStudent(id);

        return res.json(student);
    }

    /**
     * Retrieves the reading log for a student in a class section.
     *
     */
    private getStudentReadingLog(req: Request, res: Response) {
        const studentId = req.params.studentId;
        const courseSectionId = req.params.sectionId;

        const readingLog = this.studentSvc.getStudentReadingLog(studentId, courseSectionId);

        return res.json(readingLog);
    }

    public getRouter(): Router {
        return this.router;
    }
}