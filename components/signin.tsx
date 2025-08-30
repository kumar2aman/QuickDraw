'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { signInSchema } from '@/app/Schema/schema'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

type formfield = z.infer<typeof signInSchema>

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const session = useSession()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formfield>({
    resolver: zodResolver(signInSchema),
  })

  const onsubmit = async (data: formfield) => {
    setLoading(true)
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })

    try {
      if (res?.ok) {
        router.push('/dashboard')
      } else {
        console.log('No user found with this email or invalid password')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to your QuickDraw account</p>
          </div>

          <form onSubmit={handleSubmit(onsubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  {...register('email')}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 border-t border-gray-200" />

          {/* Social Auth */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">Or sign in with</p>
            <div className="flex justify-center space-x-6">
              {/* Google */}
              <button
                onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                className="bg-white border border-gray-300 hover:border-gray-500 p-2 rounded-lg"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/google/google-tile.svg"
                  alt="Google"
                  className="w-6 h-6"
                />
              </button>

              {/* GitHub */}
              <button
                onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
                className="bg-white border border-gray-300 hover:border-gray-500 p-2 rounded-lg"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="GitHub"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>

          {/* Link to signup */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a href="/signup" className="text-primary-600 font-medium hover:text-primary-500">
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
