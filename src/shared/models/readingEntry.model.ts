import { Trackable } from './trackable.model';

/**
 * This class represents the concept of a reading entry in
 * our application.  A reading entry represents an entry in
 * the reading log.
 *
 * @author Union Hills Software
 * @date   November 11, 2018
 *
 */

export class ReadingEntry implements Trackable {
    id: number;

    readingDate: Date;
    publicationTitle: string;
    duration: number;
    notes: string;
    supervisorVerification: string;

    createdAt: Date;
    updatedAt: Date;
}
