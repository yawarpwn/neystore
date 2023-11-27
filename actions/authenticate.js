'use server'

import { signIn } from '@/auth'

export async function authenticate(prevState, formData) {
  try {
    await signIn('credentials', Object.fromEntries(formData))
  } catch (error) {
    if (error.message.includes('CredentialsSignin')) {
      return 'CredentialsSignin'
    }
    throw error
  }
}
