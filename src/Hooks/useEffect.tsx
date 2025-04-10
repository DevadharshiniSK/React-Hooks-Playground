import axios from "axios"
import { useEffect, useState } from "react"


const UseEffectDemo = () => {

    const [ users, setUsers ]     =   useState([])

    // using fetch
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((res) => res.json())
    //         .then((data) => setUsers(data))
    //         .catch((error) => console.log(error));
    // },[])

    // using axios to fetch data
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data))
            .catch((error) => console.log(error));
    },[])

    return (
        <div>
            {
                users.map((user: any) => {
                    return <div key={user?.id}>{user?.name}</div>
                })
            }
        </div>
    )
}

export default UseEffectDemo
