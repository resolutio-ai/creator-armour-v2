import { ICreatorWork } from "@/data/db/models/CreatorWork";
import CreatorWorkRepositoryInstance from "@/data/db/repository/CreatorWorkRepository"
import { HttpException } from "@/resources/errors";
import { INTERNAL_SERVER_ERROR, NOT_FOUND } from "@/resources/statusCodes";
import { isMongoError } from "@/resources/utils";
import { MongoError } from "mongodb";
import { uploadEvidenceInfo } from "../Integrations/lighthouse";

class CreatorWorkService {
    private static _instance: CreatorWorkService;

    private _repo: typeof CreatorWorkRepositoryInstance;

    private constructor() {
        this._repo = CreatorWorkRepositoryInstance;
    }

    public static get instance() {
        if (!this._instance) {
            this._instance = new CreatorWorkService;
        }
        return this._instance;
    }

    createCreatorWork = async (model: ICreatorWork) => {
        try {
            const existingWork = await this._repo.findCreatorWork(model);

            if (existingWork) {
                return existingWork;
            }

            const lightHouseResponse = await uploadEvidenceInfo({ name: `-${model.dateOfCreation}-${model.email}-${model.workName}`, information: model });

            const createWorkResponse = await this._repo.createCreatorWork({ ...model, ipfsInfo: { name: lightHouseResponse.Name, hash: lightHouseResponse.Hash, size: lightHouseResponse.Size } });

            return ({
                id: createWorkResponse?._id,
                workName: createWorkResponse?.workName,
                dateOfCreation: createWorkResponse?.dateOfCreation,
                cid: createWorkResponse?.ipfsInfo?.hash,
                ipfsName: createWorkResponse?.ipfsInfo?.name,
                ipfsSize: createWorkResponse?.ipfsInfo?.Size
            })

        } catch (error: unknown) {
            if (isMongoError(error)) {
                throw new HttpException(INTERNAL_SERVER_ERROR, `MongoError: ${(error as MongoError)?.message}`)
            }

            const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';

            throw new HttpException(INTERNAL_SERVER_ERROR, errorMessage);
        }
    }

    getCreatorWork = async (id: string) => {
        try {
            const creatorWork = await this._repo.getCreatorWork(id);

            if (!creatorWork) {
                throw new HttpException(NOT_FOUND, "Invalid Creator Work Id");
            }

            return creatorWork
        } catch (error: unknown) {

            if (isMongoError(error)) {
                throw new HttpException(INTERNAL_SERVER_ERROR, `MongoError: ${(error as MongoError)?.message}`)
            }

            const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';

            throw new HttpException(INTERNAL_SERVER_ERROR, errorMessage);
        }
    }

    getAllCreatorWorks = async (email?: string) => {
        try {
            return await this._repo.getAllCreatorWorks(email);
        } catch (error: unknown) {

            if (isMongoError(error)) {
                throw new HttpException(INTERNAL_SERVER_ERROR, `MongoError: ${(error as MongoError)?.message}`)
            }

            const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';

            throw new HttpException(INTERNAL_SERVER_ERROR, errorMessage);
        }
    }
}

const creatorWorkService = CreatorWorkService.instance;
export default creatorWorkService;