import { User, ReadingEntry, Instructor } from 'models';
import { InstructorRepository } from '../repos';

/**
 * This class represents a business service for managing Instructors.
 *
 * @author Union Hills Software
 * @date   December 16, 2018
 *
 */

export class InstructorService {
    constructor(
        private readonly instructorRepo: InstructorRepository = new InstructorRepository()
    ) {}

    public getInstructors(): Instructor[] {
        return this.instructorRepo.findAll();
    }

    public getInstructor(id: number): User {
        return this.instructorRepo.findOne(id);
    }
}
