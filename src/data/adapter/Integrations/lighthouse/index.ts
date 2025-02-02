import { ICreatorWork } from '@/data/db/models/CreatorWork';
import lighthouse from '@lighthouse-web3/sdk'

export type LightHouseResponse = { Name: string, Hash: string, Size: string }

export const uploadEvidenceInfo = async (data: { name: string, information: ICreatorWork  }): Promise<LightHouseResponse> => {
    const response: { data: LightHouseResponse } =
        await lighthouse.uploadText
            (
                JSON.stringify(data),
                process.env.LIGHTHOUSE_API_KEY!,
                data.name
            )

    return response.data;
}


