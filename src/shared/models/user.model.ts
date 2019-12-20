import { Trackable } from './trackable.model';

/**
 * This class represents the concept of a user in our application.
 *
 * @author Union Hills Software
 * @date   December 8, 2018
 *
 */

// ToDo: Determine if this should be an abstract class or
// even an interface
export class User implements Trackable {
    id: number;

    firstName: string;
    lastName: string;
    email: string;
    
    createdAt: Date;
    updatedAt: Date;
}