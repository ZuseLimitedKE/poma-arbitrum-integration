import { ErrorMessages } from "./messages";

export class MyError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "MyError";
    }
}

export function handleError(err: any, message: ErrorMessages) {
    if (err instanceof MyError) {
        throw err;
    } else {
        throw new MyError(message);
    }
}