import CreatorWork, { ICreatorWork } from "../models/CreatorWork";

class CreatorWorkRepository {
    private static _instance: CreatorWorkRepository;

    private _model: typeof CreatorWork;

    private constructor() {
        this._model = CreatorWork;
    }

    public static get instance() {
        if (!this._instance) {
            this._instance = new CreatorWorkRepository;
        }
        return this._instance;
    }

    createCreatorWork = async (model: ICreatorWork) => {
        const creatorWork = new this._model(model);

        return await creatorWork.save();
    }

    getCreatorWork = async (id: string) =>
        await this._model.findById(id);

    findCreatorWork = async (model: Partial<ICreatorWork>) =>
        await this._model.findOne(model);

    getAllCreatorWorks = async (email?: string) =>
        email ? await this._model.find({ email }) : await this._model.find({});
}

const CreatorWorkRepositoryInstance = CreatorWorkRepository.instance;

export default CreatorWorkRepositoryInstance;