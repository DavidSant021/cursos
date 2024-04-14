"use client"


import { useState } from "react"

export default function SubscribeForm() {
    const [email, setEmail] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        setEmail("")
        alert("Email cadastrado com sucesso!")
    }

    return (
        <form
            className="flex justify-center gap-4 p-4"
            onSubmit={handleSubmit}
        >
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Seu e-mail principal"
                className="bg-slate-800 p-3 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-sky-700 p-3 rounded">
                Se inscrever
            </button>
        </form>
    )
}