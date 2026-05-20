'use client'

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useLayout } from '@/hooks/use-layout'
import { IFolder } from '@/types'
import { FolderItemCard, FolderItemRow } from './folder-item'

interface Props {
  folders: IFolder[]
}

export function FolderList({ folders }: Props) {
  const { layout } = useLayout()

  return layout === 'list' ? (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead className='text-right'>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {folders.map(folder => (
          <FolderItemRow key={folder.id} folder={folder} />
        ))}
      </TableBody>
    </Table>
  ) : (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {folders.map(folder => (
        <FolderItemCard key={folder.id} folder={folder} />
      ))}
    </div>
  )
}
