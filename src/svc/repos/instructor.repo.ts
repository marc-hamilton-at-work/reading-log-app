import * as _ from "lodash";
import { Instructor, ReadingEntry } from 'models';

/**
 * This class handles the CRUD operations to our persistence store
 * for Instructors.
 *
 * @author Union Hills Software
 * @date   December 16, 2018
 *
 */

export class InstructorRepository {

    constructor(
        private fs = require('fs'),
        private instructorDb: Instructor[] = new Array<Instructor>()
    ) {
        this.loadMockDb();
    }

    /**
     * We're using a simple JSON file in place of an actual database for the
     * time being.
     *
     */
    private loadMockDb() {
        this.fs.readFile('./src/svc/repos/mockInstructors.db.json', (err: any, data: any) => {
            if (err) throw err;

            this.instructorDb = JSON.parse(data);
        });
    }

    public findAll(): Instructor[] {
        return this.instructorDb;
    }

    public findOne(id: number): Instructor {
        return _.find(this.instructorDb, (ins: Instructor) => ins.id == id);
    }
}