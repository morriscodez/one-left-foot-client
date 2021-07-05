import { userTokenStorageKey, authApi } from "./auth/AuthSettings";

export const apiHeaders = () => {
    return {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem(userTokenStorageKey)}`
    }
}

export const apiSettings = {
    // baseUrl: "https://oneleftfoot-nss-api.herokuapp.com"
    baseUrl: `${authApi.localApiBaseUrl}`
}