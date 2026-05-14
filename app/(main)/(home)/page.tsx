import { FolderList } from '@/components/shared/folder-list'
import { Header } from '@/components/shared/header'
import { db } from '@/lib/firebase'
import { auth } from '@clerk/nextjs/server'
import { collection, getDocs, query, where } from 'firebase/firestore'

const getFolders = async (userId: string) => {
  const folders: { id: string }[] = []

  const q = query(
    collection(db, 'folders'),
    where('userId', '==', userId),
    where('isArchived', '==', false)
  )

  const querySnapshot = await getDocs(q)

  querySnapshot.forEach(doc => {
    folders.push({ id: doc.id, ...doc.data() })
  })

  return folders
}

export default async function Home() {
  const { userId } = await auth()

  const folders = await getFolders(userId!)

  return (
    <>
      <Header label='My drive' isHome />
      <FolderList folders={JSON.parse(JSON.stringify(folders))} />
    </>
  )
}
