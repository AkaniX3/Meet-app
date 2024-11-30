import { cn } from '@/lib/utils';
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { CallControls, CallParticipantsList, CallStatsButton, PaginatedGridLayout } from '@stream-io/video-react-sdk';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Users } from 'lucide-react';

const MeetingRoom = () => {
  const [showParticipants, setShowParticipants] = useState(false);
  const router = useRouter();

  return (
    <section className='relative h-screen w-full overflow-hidden pt-4 text-white bg-gray-900'>
      <div className='relative flex h-[calc(100vh-86px)] w-full items-center justify-center'>
        <div className='flex h-full w-full max-w-[1000px] items-center'>
          <PaginatedGridLayout />
        </div>
        <div
          className={cn(
            'ml-2 h-full w-[300px] overflow-y-auto bg-gray-800 shadow-md',
            { 'hidden': !showParticipants, 'block': showParticipants }
          )}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>

      <div className='absolute bottom-0 flex w-full items-center justify-center py-8 gap-5'>
        <CallControls
          onLeave={() => {
            router.back();
          }}
        />
        <CallStatsButton />

        <button onClick={() => setShowParticipants((prev) => !prev)}>
          <div className='cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]'>
            <Users size={20} className='text-white' />
          </div>
        </button>
      </div>
    </section>
  );
};

export default MeetingRoom;
