import { useFormStatus } from 'react-dom'
import { Button } from '../../button'
export function SubmitButton({ children, ...props }) {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending} type='submit' {...props}>
      {children}
    </Button>
  )
}
