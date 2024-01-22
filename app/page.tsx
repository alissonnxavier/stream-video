import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className='text-red-600'>
      Only authenticated users can see this
      <Input/>
      <Button variant='destructive' size='icon'>
        Hii
      </Button>
      <UserButton afterSignOutUrl='/'/>
      </div>
  )
}
