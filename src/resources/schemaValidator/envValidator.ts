import * as Yup from 'yup';

export const configurationValidation = Yup.object({
    LIGHTHOUSE_API_KEY: Yup.string().required("LIGHT_HOUSE_API_KEY is required").label("LIGHT HOUSE API Key").trim(),
    MONGO_URI: Yup.string().required("MONGO_URI is required").label("MONGO API Key").trim()
})


