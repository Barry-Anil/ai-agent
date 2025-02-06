import ChatInterface from '@/components/ChatInterface'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { getConvexClient } from '@/lib/convex'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

interface ChatPageProps{
  params: Promise<{
    chatId: Id<"chats">
  }>
}

async function ChatPage ({params}: ChatPageProps) {

  const {chatId} = await params

  // check if user is signed in
  const {userId} = await auth()

  if(!userId) {
    redirect("/")
  }

  try {
    //get convex client
    const convex = getConvexClient();

    const initialMessages = await convex.query(api.messages.list, {chatId});
    
    return (
      <div className='flex-1 overflow-hidden'>
        <ChatInterface chatId={chatId} initialMessages={initialMessages}/>
      </div>
    )
  } catch (error) {
    console.error("🔥 Error loading chat:" , error);
    redirect("/dashboard")
  }
}

export default ChatPage