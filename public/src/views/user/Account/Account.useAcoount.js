import { useState } from "react"
import { useMount } from "react-use"
import { users } from "../../../api/users"

export const useAcoount = () => {
    const [image, setImage] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useMount(async () => {
        const response = await users.getCurrent()
        console.log(response)

        setImage(!response.image ? null : URL.createObjectURL(response.image))

        setName(response.name)
        setEmail(response.email)

    })
    return{
        image,
        name,
        email
    }
}