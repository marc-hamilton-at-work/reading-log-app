import { User, ReadingLog, Student } from 'models';
import { StudentRepository, ReadingLogRepository } from '../repos';

/**
 * This class represents a business service for managing students and
 * related information.
 *
 * @author Union Hills Software
 * @date   December 2, 2018
 *
 */

export class StudentService {
    constructor(
        private readonly studentRepo: StudentRepository = new StudentRepository(),
        private readonly readingLogRepo: ReadingLogRepository = new ReadingLogRepository()
    ) {}

    public getStudents(): Student[] {
        return this.studentRepo.findAll();
    }

    public getStudent(id: number): Student {
        return this.studentRepo.findOne(id);
    }

    public getStudentReadingLog(studentId: number, classSectionId: number): ReadingLog {
        return this.readingLogRepo.findByStudentClassSection(studentId, classSectionId);  // this is not right
    }
}