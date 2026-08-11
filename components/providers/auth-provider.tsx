'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { getUser, User } from '@/lib/auth'
import { useRouter, usePathname } from 'next/navigation'

interface AuthContextType {
  user: User | null
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType>({ user: null, isLoading: true })

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkAuth = () => {
      const currentUser = getUser()
      setUser(currentUser)
      setIsLoading(false)

      if (!currentUser && !pathname.startsWith('/login')) {
        router.push('/login')
      } else if (currentUser && pathname === '/login') {
        // Redirect to appropriate landing page based on role (default to dashboard for now)
        router.push('/dashboard')
      } else if (currentUser && pathname === '/') {
        router.push('/dashboard')
      }
    }

    checkAuth()
  }, [pathname, router])

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-[#EEF2F6]">Loading...</div>
  }

  return <AuthContext.Provider value={{ user, isLoading }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
