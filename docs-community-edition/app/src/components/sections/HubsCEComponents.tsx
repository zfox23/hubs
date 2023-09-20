import React from 'react';
import Divider from '../Divider';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { HubsDivider } from '../HubsDivider';

export const HubsCEComponents = ({ }) => {
    return (
        <div className='py-4 px-2 md:px-4 w-full max-w-4xl space-y-4'>
            <h2 id="hubs-ce-components" className='text-3xl font-semibold'><a href="#hubs-ce-components" className='hover:underline'>Hubs Community Edition Software Components</a></h2>
            <Divider className='!mt-1' />
            <p></p>

            <HubsDivider className='w-full max-w-6xl' />
        </div>
    )
}