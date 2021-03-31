import { useState, useEffect } from 'react'

const useFetch = (url) => { // the url will received from component
    const [data, setData] = useState(null)
    const [isPendign, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {

                    if (!res.ok) { // <-- if server is unrichable. res.ok = falce
                        throw Error('could not fetch the data for that resource ') // throw the error to catch block
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data) // <-- updates blogs state
                    setIsPending(false) // <-- after data is come, state becomes false
                    setError(null) // <-- get rid of the error message if fetch is successful
                })
                .catch(err => {
                    setIsPending(false) // <-- if we get the error laodnig message does not shown
                    setError(err.message)  // <-- update state with error throw by catch block
                })
        }, 1000);
    }, [url]) // <-- re-run this function when the url changes

    return { data, isPendign, error } // <-- send properties to component which will uses this hook
}

export default useFetch
