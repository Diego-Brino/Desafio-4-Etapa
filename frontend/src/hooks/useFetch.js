import {useCallback, useEffect, useState} from "react";
import theme from "../themes";
import {useTheme} from "@mui/system";
import axios from "axios";


export default function useFetch(axiosParams, immediate) {

    const instance = axios.create({
        baseURL: 'http://localhost:8080'
    });

    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = useCallback(async (params) => {
        setLoading(true);
        try {
            const res = await instance({method: params.method, url: params.url, headers: params.headers, data: params.data});
            setResponse(res.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [fetchData])

    useEffect(() => {
        if (immediate === true) {
            fetchData(axiosParams)
        }
    }, [fetchData, immediate])

    return {response, error, loading, fetchData}
}