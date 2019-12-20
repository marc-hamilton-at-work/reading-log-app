import { Trackable } from './trackable.model';
import { Student } from './student.model';
import { Instructor } from './instructor.model';

/**
 * This class represents the concept of class section in our application.
 * A class section is the equivalent of the definition for a school class.
 * Note that it does not contain the class roster.  This is part of the
 * ClassEnrollment object.
 *
 * @author Union Hills Software
 * @date   December 8, 2018
 *
 */

export class ClassSection {
    title: string;
    gradeLevel: string;
    instructor: Instructor;
    description: string;
}
