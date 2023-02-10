import { AxiosError } from "axios";
import { ErrorRequestHandler, Response, Request, NextFunction } from "express";
import _ from "lodash";
import { DatabaseError } from "pg";
export const sendError = (
    error: any,
    res: Response,
    message: string | string[] = "unexpected error, please try again later.",
    statusCode: number = 500,
) => {
    if (error instanceof AxiosError && !_.isNil(error.response)) {
        return res.status(error.response.status).send({
            code: error.response.status,
            message: error.message,
            data: error.response.data,
        });
    } else if (error instanceof DatabaseError) {
        return res.status(statusCode).send({ code: statusCode, message: error.message, data: error });
    } else {
        return res.status(statusCode).send({ code: statusCode, message, data: error });
    }
};

export const sendResponse = (res: Response, message: string | string[], statusCode: number = 200) => {
    return res.status(statusCode).send({ code: statusCode, message });
};
