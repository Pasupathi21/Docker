/* eslint-disable @typescript-eslint/no-unused-vars */
const API_ENDPOINT: string = 'http://localhost:7000'

export const ApiService = async (URL:string, data: Record<string, unknown> = {}, header: Record<string, unknown> ) => {
    if(header.method != 'GET'){
        header.body = JSON.stringify(data)
    }
    URL = API_ENDPOINT + URL
    return (await fetch(URL, header)).json()

}