'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPasword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Login attempt with:", { email, password })
    }

    return (
        <Card className="w-[350px">
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Enter your Credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPasword(e.target.value)}
                        />
                    </div>
                    <Button type="submit" className="w-full" onClick={() => alert('Thanks for Login!')}>
                        Login
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default LoginForm