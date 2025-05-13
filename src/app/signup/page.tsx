"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignUpPage() {
  const [passwordStrength, setPasswordStrength] = useState(0)

  const checkPasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    setPasswordStrength(strength)
  }

  return (
    <div className="flex min-h-screen">
      {/* Left side with gradient */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-teal-500 via-blue-500 to-purple-600">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]"></div>
        <div className="w-full p-8">
          <div className="text-white text-2xl font-bold">UniteNote</div>
        </div>
      </div>

      {/* Right side with form */}
      <div className="w-full lg:w-1/2 bg-[#0F1117] p-8 flex items-center">
          <div className="w-full max-w-md mx-auto space-y-6">
          <div className="lg:hidden">
            <div className="text-white text-2xl font-bold mb-8">UniteNote</div>
          </div>

          <div className="flex justify-end">
            <Button 
              variant="outline" 
              className="text-sm text-gray-400 hover:text-white transition-colors border-gray-800 hover:bg-gray-800/50"
            >
              English (USA)
            </Button>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white">Sign up to UniteNote</h1>
            <p className="text-gray-400 text-sm">
              Already have an account?{" "}
              <Link href="/signin" className="text-blue-500 hover:underline">
                Sign in
              </Link>
            </p>
          </div>

          <Button 
            variant="outline" 
            className="w-full h-14 flex items-center justify-center gap-3 hover:bg-white/5 transition-colors border-gray-800"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-400 bg-[#0F1117]">OR</span>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Full Name"
                className="h-14 bg-transparent border-gray-800 text-white focus-visible:ring-gray-700 placeholder:text-gray-500"
                autoComplete="name"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email address"
                className="h-14 bg-transparent border-gray-800 text-white focus-visible:ring-gray-700 placeholder:text-gray-500"
                autoComplete="email"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                className="h-14 bg-transparent border-gray-800 text-white focus-visible:ring-gray-700 placeholder:text-gray-500"
                autoComplete="new-password"
                onChange={(e) => checkPasswordStrength(e.target.value)}
              />
              <div className="mt-2">
              <div className="text-xs text-gray-400 mb-1">Password strength</div>
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full ${
                        i < passwordStrength ? "bg-teal-500" : "bg-gray-700"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="terms" className="border-gray-700" />
              <label htmlFor="terms" className="text-sm text-gray-400">
                By creating an account, you agree to our{" "}
                <Link href="#" className="text-blue-500 hover:underline">
                  Privacy Policy
                </Link>
                ,{" "}
                <Link href="#" className="text-blue-500 hover:underline">
                  Term and Conditions
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-blue-500 hover:underline">
                  Notification settings
                </Link>
              </label>
            </div>

            <Button className="w-full h-14 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium mt-2">
              SIGN UP
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
