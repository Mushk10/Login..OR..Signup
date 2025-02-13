'use client'

import { useState } from "react"
import LoginForm from "@/components/LoginForm"
import SignupForm from "@/components/SignupForm"
import { Button } from "@/components/ui/button"

export default function AuthPage() {
    const [isLogin, SetIsLogin] = useState(true)

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-800 text-white">
            <div className="mb-4">
                <Button
                 variant="ghost"
                 onClick={() => SetIsLogin(!isLogin)}
                 className="text-sm"
                 >
                    {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
                 </Button>
            </div>
            {isLogin? <LoginForm /> : <SignupForm />}
        </div>
    )
}
