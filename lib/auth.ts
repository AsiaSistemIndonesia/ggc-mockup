export type Role = 'Admin' | 'Supervisor' | 'Finance' | 'Inbound Operator' | 'Field/Screening Operator' | 'QM/Outbound Operator' | 'Kasir/Retail' | 'Viewer'

export interface User {
  id: string
  name: string
  role: Role
  site: string
}

export const login = (user: User) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('ggc_user', JSON.stringify(user))
  }
}

export const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('ggc_user')
    window.location.href = '/login'
  }
}

export const getUser = (): User | null => {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('ggc_user')
    return user ? JSON.parse(user) : null
  }
  return null
}
