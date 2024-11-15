import * as Yup from 'yup';
import { LicenseType, WorkMedium } from "../enums";

export const creatorWorkSchema = Yup.object({
    firstName: Yup.string().required("first name is required").label("Title").trim(),
    lastName: Yup.string().required("last name is required").label("Description").trim(),
    email: Yup.string().email().required("email is required").trim(),
    workName: Yup.string().required("Name of work is required").trim(),    
    medium: Yup.mixed<WorkMedium>().oneOf(Object.values(WorkMedium), "Medium should be either be 'Music', 'Art', 'AI', 'Film' etc").required("Work medium is required"),   
    file: Yup.string().required("file is required").trim(),   
    dateOfCreation: Yup.date().max(new Date(), 'Date must be in the past').required("Date of creation is required"),   
    license: Yup.mixed<LicenseType>().oneOf(Object.values(LicenseType), "License should be either 'CC-BY', 'CC-BY-NC', etc").required("Work license type is required"),
})