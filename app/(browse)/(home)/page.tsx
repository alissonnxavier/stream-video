'use client';

import { onFollow } from '@/actions/follow'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UserButton } from '@clerk/nextjs'
import { useTransition } from 'react';
import { toast } from 'sonner';

export default function Home() {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onFollow('123', 'my name is victory')
        .then(() => toast.error("Followed the user", {
          unstyled: true,
          className: 'gap-x-2 flex items-center text-green-500 bg-red-400 p-4 rounded-md'
        }));
    })
  }

  return (
    <Button
      className='text-green-500 bg-red-400 align-middle items-center'
    disabled={isPending} onClick={onClick}>
      Click me
    </Button>
  )
}
