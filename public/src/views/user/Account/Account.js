import React from "react"
import { Value } from "../../../components/Value"
import { Layout } from "../../../components/Layout"
import { useAccount } from "./Account.useAcoount"

export const Account = () => {
    const { email, image, name} = useAccount()
    
    return <Layout title="Account" navigation="account">

         <Value label="Name" value={name} />
        <Value label="Profile Image" image={image} />
        {email && <Value label="Email" value={email} />}
        {email &&   <Value label="Password" value="*******" />}
        
    </Layout>
}
export default Account