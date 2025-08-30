'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'
import { useState } from 'react'
import { Mail, Lock, User } from 'lucide-react'
import { signUpSchema } from '@/app/Schema/schema'
import { newUser } from '../app/actions/userData'
import { DEFAULT_LOGIN_REDIRECT } from '@/route'

type schemaType = z.infer<typeof signUpSchema>

export default function Signup() {
  const router = useRouter()
  const session = useSession()
  const [loading, setLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaType>({
    resolver: zodResolver(signUpSchema),
  })

  const onsubmit = async (data: schemaType) => {
    try {
      await newUser(data)
      router.push('/signin')
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
            <p className="text-gray-600">Join Exceldraw and start building</p>
          </div>

          <form onSubmit={handleSubmit(onsubmit)} className="space-y-6">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  {...register('username')}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>
              {errors.username && <p className="text-red-600 text-sm mt-1">{errors.username.message}</p>}
            </div>

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
                  type="password"
                  {...register('password')}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="Create a password"
                />
              </div>
              {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 border-t border-gray-200" />

          {/* Social Auth */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">Or sign up with</p>
            <div className="flex justify-center space-x-6">
              {/* Google */}
              <button
                onClick={() => signIn('google', { callbackUrl: DEFAULT_LOGIN_REDIRECT })}
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
                onClick={() => signIn('github', { callbackUrl: DEFAULT_LOGIN_REDIRECT })}
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

          {/* Link to sign in */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <a href="/signin" className="text-primary-600 font-medium hover:text-primary-500">
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
