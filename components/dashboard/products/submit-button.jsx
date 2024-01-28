import { Button } from '../../button'
import { useFormStatus } from 'react-dom'
export function SubmitButton({ children, ...props }) {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending} type="submit" {...props}>
      {children}
    </Button>
  )
}
