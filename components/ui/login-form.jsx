'use client'

import { authenticate } from '@/actions/authenticate'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { useFormState, useFormStatus } from 'react-dom'

export function LoginForm({ className, ...props }) {
  const [state, dispach] = useFormState(authenticate, undefined)

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form action={dispach}>
        <div className='grid gap-2'>
          <div className='grid gap-1'>
            <Label className='sr-only' htmlFor='email'>
              Email
            </Label>
            <Input
              id='email'
              name='email'
              placeholder='name@example.com'
              type='email'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
            />
          </div>

          <div className='grid gap-1'>
            <Label className='sr-only' htmlFor='password'>
              Password
            </Label>
            <Input
              id='password'
              name='password'
              type='password'
              autoCapitalize='none'
              required
            />
            <LoginButton />
          </div>
        </div>
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          {state === 'CredentialsSignin' && (
            <span className='bg-background px-2 text-red-500'>
              Credenciales incorrectas
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending}>
      {pending && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}Entrar
    </Button>
  )
}

export default LoginForm
