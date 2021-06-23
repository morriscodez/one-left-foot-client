import { userTokenStorageKey } from "./auth/AuthSettings";

export const apiHeaders = () => {
    return {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem(userTokenStorageKey)}`
    }
}

export const apiSettings = {
    baseUrl: "http://oneleftfoot-nss-api.herokuapp.com/"
}