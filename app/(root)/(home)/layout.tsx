'use client'

import { SignedOut, SignedIn, SignInButton, UserButton, useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import { Video, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import MeetingModal from '@/components/ui/MeetingModal'
import { useStreamVideoClient, Call } from '@stream-io/video-react-sdk'
import { useRouter } from 'next/navigation'
import { useToast } from "@/hooks/use-toast"
import { Input } from '@/components/ui/input'

const HomeLayout = () => {
  const [meetingState, setmeetingState] = useState<'isInstantMeeting' | 'isJoiningMeeting' | undefined>()
  const { user } = useUser();
  const router = useRouter();
  const client = useStreamVideoClient();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: '',
    link: '',
  });
  const [callDetails, setCallDetails] = useState<Call>();
  const { toast } = useToast();

  const createMeeting = async () => {
    if(!client || !user) return;

    try {
      if(!values.dateTime) {
        toast({ title: "Please select date and time" })
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call('default',id);

      if(!call) throw new Error("Failed to create call");

      const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString(); 
      const description = values.description || "Instant meeting";
      
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description
          }
        }
      })

      setCallDetails(call);

      if(!values.description) {
        router.push(`/meeting/${call.id}`)
      }
      toast({ title: "Meeting created!" })
    } catch (error) {
      console.log(error);
      toast({ title: "Failed to create meeting" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <header className="px-6 lg:px-8 h-20 flex items-center">
          <Video className="text-white h-8 w-8 text-primary" />
          <span className="ml-2 text-2xl font-bold text-white">Meet-app</span>
        <div className="ml-auto flex items-center gap-4 text-white text-sm font-medium">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Video calls and meeting
                </h1>
                <p className="pt-12 pb-4 mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Connect, Collaborate & Celebrate from anywhere with meet-app
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg">
                <Button
                  className="bg-sky-400 hover:bg-sky-500 text-white font-bold text-lg h-16 px-6 rounded-2xl w-full flex items-center justify-center gap-3 shadow-lg hover:shadow-sky-400/50 transition-all duration-300 transform hover:-translate-y-1"
                  size="lg"
                  onClick= {() => setmeetingState('isInstantMeeting')}
                >
                  <Video className="h-6 w-6" />
                  Create Meeting
                </Button>
                <Button
                  className="bg-pink-400 hover:bg-pink-500 text-white font-bold text-lg h-16 px-6 rounded-2xl w-full flex items-center justify-center gap-3 shadow-lg hover:shadow-pink-400/50 transition-all duration-300 transform hover:-translate-y-1"
                  size="lg"
                  onClick= {() => setmeetingState('isJoiningMeeting')}
                >
                  <Users className="h-6 w-6" />
                  Join Meeting
                </Button>
              </div>
            </div>
          </div>
          <MeetingModal 
            isOpen={meetingState === 'isInstantMeeting'}
            onClose={() => setmeetingState(undefined)}
            title= "Start an Instant Meeting"
            className="text-center"
            buttonText="Start Meeting"
            handleClick={createMeeting}
          />
          <MeetingModal 
            isOpen={meetingState === 'isJoiningMeeting'}
            onClose={() => setmeetingState(undefined)}
            title= "Type the link here"
            className="text-center"
            buttonText="Join Meeting"
            handleClick={() => router.push(values.link)}
          >
            <Input
              placeholder='Meeting link'
              className='rounded border-none bg-slate-700 focus-visible:ring-0 focus-visible:ring-offset-0'
              onChange={(e) => setValues({...values, link:e.target.value })}
            />
          </MeetingModal>
        </section>
      </main>
    </div>
  )
}

export default HomeLayout