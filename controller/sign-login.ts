import axios from "axios";



enum ErrorAuth {
    ErrorTokenUndefined,
    ErrorToken


}

const Error = (error: ErrorAuth) => {
    switch (error) {
        case ErrorAuth.ErrorTokenUndefined:
            return "Token Undefined";

            break;

        case ErrorAuth.ErrorToken:
            return "Token Error"
            break;

        default:
            break;
    }


}



export const getUserApi = (token: string, api: string) => {



    const p = new Promise((resolve, reject) => {

        if (token === undefined) reject(Error(ErrorAuth.ErrorTokenUndefined));
        return axios.get(api, {
            headers: {
                'token': token
            }
        })
            .then((res) => {

                if (res.data.msg === 'Error') reject({ msg: Error(ErrorAuth.ErrorToken), error: res.data.error })
                resolve(res.data.msg)
            }).catch(err => reject({ err: err }))

    })
    return p

};
