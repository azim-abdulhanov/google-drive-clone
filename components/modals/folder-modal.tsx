'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { useFolder } from '@/hooks/use-folder'

export function FolderModal() {
  const { isOpen, onClose } = useFolder()

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Folder</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
