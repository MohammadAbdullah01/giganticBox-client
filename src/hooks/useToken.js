import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState("")
    const email = user?.user?.email;
    console.log(email)
    useEffect(() => {
        fetch('http://localhost:5000/login', {
            method: "post",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem("accessToken", data.token)
                setToken(data.token)
            }
            )
    }, [user])

    return [token]
}

export default useToken;