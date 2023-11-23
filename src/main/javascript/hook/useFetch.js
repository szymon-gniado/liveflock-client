import {useEffect, useState} from "react";

export default function useFetch(url) {
    const [status, setStatus] = useState("pending");
    const [error, setError] = useState(null);
    const [data, setData] = useState({});

    async function getAccount(url) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                setStatus("ok");
                setData(await response.json())
            } else throw Error("Network response was not ok");
        } catch (error) {
            setStatus("error");
            setError(error);
        }
    }

    useEffect(() => {
        getAccount(url);
    }, [url]);
    return [status, error, data];
}