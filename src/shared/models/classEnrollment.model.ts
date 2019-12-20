import { Trackable } from './trackable.model';
import { Student } from './student.model';
import { ClassSection } from './classSection.model';

/**
 * This class represents the concept of an enrollment in our application.
 * An enrollment contains the class section information and the students
 * within the section.
 *
 * @author Union Hills Software
 * @date   December 8, 2018
 *
 */

export class ClassEnrollment implements Trackable {
    id: number;

    classSection: ClassSection;
    students: Student[];

    createdAt: Date;
    updatedAt: Date;
}
