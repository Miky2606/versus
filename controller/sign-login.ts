import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next";
import { User } from "../pages/api/interface/userDB";



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




export const getUserApi = (api: string) => {



    const p = new Promise((resolve: (value: User) => void, reject): any => {
        const token = getCookie('token') ?? ""


        if (token === "") return reject({ msg: Error(ErrorAuth.ErrorToken) });
        return axios.get(api, {
            headers: {
                'token': token
            }
        })
            .then((res) => {

                if (res.data.msg === 'Error') {
                    deleteCookie('token')
                    reject({ msg: Error(ErrorAuth.ErrorToken), error: res.data.error })

                }


                resolve(res.data.msg)
            }).catch(err => reject({ err: err }))

    })
    return p

};
