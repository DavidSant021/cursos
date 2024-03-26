import { useContext } from "react"
import UserContext from "../contexts/UserContext"

export default function Header({children}) {
    const user = useContext(UserContext)

    return (
        <>
            <h3>Bem vindo {user.name}</h3>
            {children}
        </>
    )
}