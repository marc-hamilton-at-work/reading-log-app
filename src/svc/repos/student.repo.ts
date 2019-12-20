import * as _ from "lodash";
import { Student, ReadingEntry } from 'models';

/**
 * This class handles the CRUD operations to our persistence store
 * for Students.
 *
 * @author Union Hills Software
 * @date   December 16, 2018
 *
 */

export class StudentRepository {

    constructor(
        private fs = require('fs'),
        private studentDb: Student[] = new Array<Student>()
    ) {
        this.loadMockDb();
    }

    /**
     * We're using a simple JSON file in place of an actual database for the
     * time being.
     *
     */
    private loadMockDb() {
        this.fs.readFile('./src/svc/repos/mockStudents.db.json', (err: any, data: any) => {
            if (err) throw err;

            this.studentDb = JSON.parse(data);
        });
    }

    public findAll(): Student[] {
        return this.studentDb;
    }

    public findOne(id: number): Student {
        return _.find(this.studentDb, (std: Student) => std.id == id);
    }
}