import axiosClient from "../config/config";

class LoginService {
    login(credentials){
        let data = [];
        let error = null;
        let isLoading = true;

        axiosClient.post('/login', credentials)
            .then((res) => {
                data = res.data
            })
            .catch((err) => {
                error = err.message
            })
            .finally(() => {
                setTimeout(() => {isLoading = false}, 2000)
            })

        return {data, error, isLoading}
    }
}

export default new LoginService();