import { useEffect, useState } from "react"


const UseEffectDemo = () => {

    const [ users, setUsers ]     =   useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
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
