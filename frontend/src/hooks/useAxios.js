import {useEffect, useState} from "react";
import axiosClient from "../config/config";
import axios from "axios";

const useAxios = (url, method, body) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url, method, body) => {
            setIsLoading(true);
            try{
                const res = await axios({
                    method: method,
                    url: url,
                    data: body,
                    cancelToken: source.token
                });
                if(isMounted){
                    setData(res.data);
                    setError(null);
                }
            }
            catch (err){
                setData([]);
                setError(err.message)
            }
            finally {
                isMounted && setTimeout(() => setIsLoading(false), 2000)
            }
        }

        fetchData(url, method, data);

        const cleanup = () => {
            isMounted = false;
            source.cancel();
        }

        return cleanup();
    }, [data, error, isLoading])

    return {data, error, isLoading}
}

export default useAxios;