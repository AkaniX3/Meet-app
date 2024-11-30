'use client'

import { useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import MeetingRoom from '@/components/ui/MeetingRoom'
import MeetingSetup from '@/components/ui/MeetingSetup'
import { useGetCallbyId } from '@/hooks/GetCallById'
import Loader from '@/components/ui/Loader'

const Meeting = ({ params: { id } } : { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallbyId(id);

  if(!isLoaded || isCallLoading) return <Loader />

  return (
    <main className='h-screen w-full'>
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ):(
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

export default Meeting