import { MongoError } from "mongodb";

export function isMongoError(error: unknown): error is MongoError{
    return error instanceof MongoError;
}