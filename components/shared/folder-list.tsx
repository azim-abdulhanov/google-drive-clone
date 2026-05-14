import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { IFolder } from '@/types'
import { FolderItem } from './folder-item'

interface Props {
  folders: IFolder[]
}

export function FolderList({ folders }: Props) {
  return (
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
          <FolderItem key={folder.id} folder={folder} />
        ))}
      </TableBody>
    </Table>
  )
}
