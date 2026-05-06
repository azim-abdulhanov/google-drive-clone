'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useFolder } from '@/hooks/use-folder'
import { db } from '@/lib/firebase'
import { formSchema } from '@/lib/validation'
import { useUser } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

export function FolderModal() {
  const { isOpen, onClose } = useFolder()
  const { user } = useUser()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ''
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const promise = addDoc(collection(db, 'folders'), {
      name: values.name,
      createdAt: serverTimestamp(),
      userId: user?.id,
      isArchived: false
    }).then(() => {
      form.reset()
      onClose()
    })

    toast.promise(promise, {
      loading: 'Creating folder...',
      success: 'Folder created successfully!',
      error: 'Failed to create folder. Please try again.'
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Folder</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-4'>
          <Input
            placeholder='Folder Name'
            {...form.register('name')}
            disabled={form.formState.isSubmitting}
          />
          <div className='flex items-center justify-end gap-2 w-full'>
            <Button
              type='button'
              variant='outline'
              className='w-fit cursor-pointer'
              onClick={onClose}
              disabled={form.formState.isSubmitting}>
              Cancel
            </Button>
            <Button
              type='submit'
              className='w-fit cursor-pointer'
              disabled={form.formState.isSubmitting}>
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
