import { LicenseType, WorkMedium } from "@/resources/enums";
import { model, models, Schema } from "mongoose";

export interface ICreatorWork {
    firstName: string;
    lastName: string;
    email: string;
    workName: string;
    medium: string;
    file: string;
    dateOfCreation: Date;
    license: string;
}

const CreatorWorkSchema = new Schema<ICreatorWork>(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        workName: {
            type: String,
            required: true,
        },
        medium: {
            type: String,
            required: true,            
            enum: Object.values(WorkMedium)
        },
        file: {
            type: String,
            required: true,
        },
        dateOfCreation: {
            type: Date,
            required: true,
        },
        license: {
            type: String,
            required: true,
            default: LicenseType.CcBy,
            enum: Object.values(LicenseType)
        },
    },
    {
        timestamps: true,
        toJSON: {
            versionKey: false,
            virtuals: true,
            transform: (_, ret) => {
                delete ret._id;
            },
        },
    },)

const CreatorWork = models.CreatorWork || model("CreatorWork", CreatorWorkSchema);

export default CreatorWork;