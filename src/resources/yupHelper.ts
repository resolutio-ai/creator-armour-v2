import { ZERO } from "./constants";
import { HttpException } from "./errors";
import { BAD_REQUEST } from "./statusCodes";
import * as Yup from 'yup';

export async function validate<T extends Record<string, unknown>>(schema: Yup.ObjectSchema<T>, jsonObject: object) {

    try {

        if (Object.keys(jsonObject).length === ZERO) {
            throw new HttpException(BAD_REQUEST, "Invalid request format. Please ensure valid JSON data.");
        }

        return schema.validate(jsonObject, {
            abortEarly: true
        }).then((value) => {
            return value;
        })

    } catch (error: unknown) {

        if (error instanceof HttpException) {
            throw error;
        }


        if (error instanceof Yup.ValidationError) {
            const errorMessage: string[] = error.inner.map((err) => err.message);

            throw new HttpException(BAD_REQUEST, errorMessage.join(', '));
        }
    }

}