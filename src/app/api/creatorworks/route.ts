import creatorWorkService from "@/data/adapter/server/CreatorWorkService";
import connectMongo, { cached } from "@/data/db/config";
import { ICreatorWork } from "@/data/db/models/CreatorWork";
import { HttpException } from "@/resources/errors";
import { creatorWorkSchema } from "@/resources/schemaValidator/creatorworkvalidator";
import { BAD_REQUEST, CREATED, INTERNAL_SERVER_ERROR, OK } from "@/resources/statusCodes";
import { validate } from "@/resources/yupHelper";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {

    try {

        if (!cached?.connection) {
            await connectMongo();
        }

        const body = await validate(creatorWorkSchema, await req.json());

        const data = await creatorWorkService.createCreatorWork(body as ICreatorWork);

        return NextResponse.json({
            message: "Creator Work Created", data
        }, { status: CREATED });
    }
    catch (error: unknown) {
        if (error instanceof HttpException) {
            return NextResponse.json({ message: error.message }, { status: error.status });
        }

        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';

        return NextResponse.json({ message: errorMessage }, { status: INTERNAL_SERVER_ERROR });
    }
}

export async function GET(req: NextRequest) {

    try {

        if (!cached?.connection) {
            await connectMongo();
        }

        const id = req.nextUrl.searchParams.get("id");
        const email = req.nextUrl.searchParams.get("email");

        if (id && email) {
            return NextResponse.json({
                message: "Only specify one query parameter to retrieve information by. Either 'id' or 'email' but never both!",
            }, { status: BAD_REQUEST });
        }

        if (id) {
            const data = await creatorWorkService.getCreatorWork(id);

            return NextResponse.json({
                message: "Creator Work Retrieved", data
            }, { status: OK });
        }

        if (email) {
            const data = await creatorWorkService.getAllCreatorWorks(email);

            return NextResponse.json({
                message: "Creator Works Retrieved", data
            }, { status: OK });
        }

        const data = await creatorWorkService.getAllCreatorWorks();

        return NextResponse.json({
            message: "Creator Works Retrieved", data
        }, { status: OK });
    }
    catch (error: unknown) {
        if (error instanceof HttpException) {
            return NextResponse.json({ message: error.message }, { status: error.status });
        }

        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';

        return NextResponse.json({ message: errorMessage }, { status: INTERNAL_SERVER_ERROR });
    }
}