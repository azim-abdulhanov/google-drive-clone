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
import { formSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export function FolderModal() {
  const { isOpen, onClose } = useFolder()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ''
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
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
          <Button
            type='submit'
            className='w-fit cursor-pointer'
            disabled={form.formState.isSubmitting}>
            Create
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
