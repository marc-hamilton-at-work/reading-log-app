import { Trackable } from './trackable.model';
import { ReadingEntry } from '.';
import { Student } from './student.model';
import { ClassSection } from './classSection.model';
/**
 * This class represents the concept of a Reading Log in
 * our application.  A Reading Log represents a log of
 * a student's reading activity.
 *
 * @author Union Hills Software
 * @date   November 11, 2018
 *
 */

export class ReadingLog implements Trackable {
    id: number;

    owner: Student;
    classEnrollmentId: number;
    group: ClassSection;
    description: string;
    entries: Array<ReadingEntry>;

    createdAt: Date;
    updatedAt: Date;
}
