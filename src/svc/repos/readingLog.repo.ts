import * as _ from "lodash";
import { ReadingLog, ReadingEntry } from 'models';

/**
 * This class handles the CRUD operations to our persistence store
 * for Reading Logs.
 *
 * @author Union Hills Software
 * @date   December 16, 2018
 *
 */

export class ReadingLogRepository {

    constructor(
        private fs = require('fs'),
        private readingLogDb: ReadingLog[] = new Array<ReadingLog>()
    ) {
        this.loadMockDb();
    }

    /**
     * We're using a simple JSON file in place of an actual database for the
     * time being.
     *
     */
    private loadMockDb() {
        this.fs.readFile('./src/svc/repos/mockReadingLogs.db.json', (err: any, data: any) => {
            if (err) throw err;

            this.readingLogDb = JSON.parse(data);
        });
    }

    public saveEntries(id: number, entries: ReadingEntry[]) {
        var one = _.find(this.readingLogDb, (log: ReadingLog) => log.id == id);
        one.entries.push(...entries);

    }

    public findAll(): ReadingLog[] {
        return this.readingLogDb;
    }

    public findOne(id: number): ReadingLog {
        return _.find(this.readingLogDb, (log: ReadingLog) => log.id == id);
    }

    /**
     * Retrieves a reading log for a paricular student for a particular
     * class section.
     *
     */
    public findByStudentClassSection(studentId: number, classSectionId: number): ReadingLog {
        return this.findOne(0);  // placeholder for now
    }
}