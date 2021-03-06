// This module holds the API base url, as well as the key names for session storage (User ID and User Token)

// If your json-server API URL or endpoint is different, please change it below
export const authApi = {
    localApiBaseUrl: "http://localhost:8000"
}

// The user id is saved under the key app_user_id in session Storage. Change below if needed
export const userTokenStorageKey = "olf_token"