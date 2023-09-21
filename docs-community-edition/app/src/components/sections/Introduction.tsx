import React from 'react';
import Divider from '../Divider';
import { AcademicCapIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { HubsDivider } from '../HubsDivider';

export const Introduction = ({ }) => {
    return (
        <div className='py-4 px-2 md:px-4 w-full max-w-4xl space-y-4'>
            <h2 id="introduction" className='text-3xl font-semibold'><a href="#introduction" className='hover:underline'>Introduction</a></h2>
            <Divider className='!mt-1' />
            <p><span className='font-semibold'>Welcome to Mozilla Hubs Community Edition,</span> a <i>self-hosted</i> virtual worlds platform for educators, teams, and organizations.</p>
            <p>By reading this document, you will:</p>
            <ul className='list-disc ml-4 !mt-2'>
                <li><a className='underline' href="#what-is-hubs-ce">Learn more</a> about what Hubs Community Edition is</li>
                <li>Understand how to <a className='underline' href="#deploying-hubs-to-gcp">deploy Community Edition to Google Cloud Platform</a></li>
                <li>Learn how to <a className='underline' href="#deploying-hubs-to-unix">deploy Community Edition to your own Unix-based server stack</a></li>
                <li><a className='underline' href="#hubs-ce-components">Explore the technology</a> underlying Hubs Community Edition</li>
            </ul>
            <p>You can <a className='underline' target="_blank" href='https://hubs.mozilla.com/labs/professional-plan-and-community-edition/'>read Mozilla's Community Edition announcement from July on Hubs Creator labs here.<ArrowTopRightOnSquareIcon className='h-4 w-4 ml-1 -top-0.5 relative inline-block' /></a></p>

            <div className='p-4 rounded-md bg-green-50 dark:bg-green-800/20 relative'>
                <div className='p-1 overflow-clip w-16 absolute top-0.5 left-0 bottom-0 flex items-start justify-center z-0'>
                    <AcademicCapIcon className='text-green-300 dark:text-green-600/40 opacity-50' />
                </div>
                <div className='z-10 relative space-y-2'>
                    <p>If you have additional questions about Hubs Community Edition or Hubs as a whole, Mozilla developers are available to answer your questions on <a className='underline' target="_blank" href='https://discord.com/invite/sBMqSjCndj'>the Hubs Discord server<ArrowTopRightOnSquareIcon className='h-4 w-4 ml-1 -top-0.5 relative inline-block' /></a>.</p>
                </div>
            </div>
        </div>
    )
}