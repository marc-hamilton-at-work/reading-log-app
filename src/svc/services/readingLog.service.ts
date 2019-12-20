import { ReadingLog, ReadingEntry } from 'models';
import { ReadingLogRepository } from '../repos';

/**
 * This class represents a business service for managing reading logs.
 *
 * @author Union Hills Software
 * @date   December 2, 2018
 *
 */

export class ReadingLogService {
    constructor(
        private readonly readingLogRepo: ReadingLogRepository = new ReadingLogRepository()
    ) {}

    public getReadingLogs(): ReadingLog[] {
        return this.readingLogRepo.findAll();
    }

    public getReadingLog(id: number): ReadingLog {
        return this.readingLogRepo.findOne(id);
    }
}
