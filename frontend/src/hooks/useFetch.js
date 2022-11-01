import {useCallback, useEffect, useState} from "react";
import axios from "axios";

export default function useFetch(axiosParams, immediate) {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [params, setParams] = useState(axiosParams);

    const fetchData = () => {
        setLoading(true);
        return new Promise((resolve, reject) => {
            axios({method: params.method, url: params.url, headers: params.headers, data: params.data})
                .then((res) => {
                    setResponse(res.data);
                    resolve(res);
                })
                .catch((err) => {
                    setError(err);
                    reject(err);
                })
                .finally(() => {
                    setLoading(false);
                })
        })
    }

    useEffect(() => {
        if (immediate === true) {
            fetchData()
        }
    }, [fetchData, immediate])

    return {response, error, loading, fetchData}
}