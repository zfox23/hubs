import React from 'react';
import Divider from '../Divider';
import { TableRow } from '../TableRow';
import { AcademicCapIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { ArrowTopRightOnSquareIcon as ArrowTopRightOnSquareIconSmall } from '@heroicons/react/20/solid';
import { HubsDivider } from '../HubsDivider';
import { StaticImage } from 'gatsby-plugin-image';

export const HubsCEComponents = ({ }) => {
    return (
        <div className='!mt-8 space-y-4 flex flex-col items-center w-full'>
            <div className='w-full max-w-4xl space-y-4 p-2'>
                <h2 id="hubs-ce-infrastructure" className='text-3xl font-semibold'><a href="#hubs-ce-infrastructure" className='hover:underline'>Understanding the Hubs CE Infrastructure</a></h2>
                <Divider className='!mt-1' />

                <div className='w-full flex flex-col items-center'>
                    <StaticImage className='w-full max-w-2xl rounded-md' quality={100} src='../../images/universe.png' alt="An image of the Southern Ring Nebula overlaid with a Carl Sagan quote: 'If you wish to bake an apple pie from scratch, you must first invent the universe.'" />
                </div>

                <p>The product known as "Mozilla Hubs" is comprised of several powerful pieces of software. For example, when you visit a Hub with your Web browser, you are interacting with the Hubs Client. <a className='underline' target="_blank" href='https://github.com/mozilla/hubs/'>You can read the client's JavaScript source code here on GitHub.<ArrowTopRightOnSquareIcon className='h-4 w-4 ml-1 -top-0.5 relative inline-block' /></a></p>

                <p>The Hubs Client itself interacts with several <i>other</i> pieces of software, such as:</p>
                <ul className='ml-4 !mt-1 list-disc'>
                    <li>
                        <p><a className='underline' target="_blank" href='https://zachfox.io/hubs-webrtc-tester/about/'>Reticulum,<ArrowTopRightOnSquareIcon className='h-4 w-4 ml-1 -top-0.5 relative inline-block' /></a> Hubs' networking and API server</p>
                    </li>
                    <li>
                        <p><a className='underline' target="_blank" href='https://zachfox.io/hubs-webrtc-tester/about/'>Dialog,<ArrowTopRightOnSquareIcon className='h-4 w-4 ml-1 -top-0.5 relative inline-block' /></a> Hubs' WebRTC voice and video communication server</p>
                    </li>
                </ul>

                <p>The Hubs Client, Dialog, and Reticulum are just three components of a larger <i>stack</i> of software. Each of those stack's components are individually configured and networked to other components in order to make Hubs work properly.</p>

                <p>Rather than require developers to download, install, configure, connect, and update each of the stack's components individually, the Hubs team has developed the product known as "Hubs Community Edition". Hubs CE simplifies and automates most of that complex deployment process using software called <span className='font-semibold'>Kubernetes</span>, which is a containerized software orchestration system.</p>

                <p>If you are already familiar with containerized software and Kubernetes, <a className='underline' href='#hubs-containers'>tap here to skip ahead to the "Hubs' Containerized Services" section.</a></p>
            </div>

            <div className='w-full max-w-4xl space-y-4 p-2'>
                <h3 id="containerized-software" className='text-xl font-semibold'><a href="#containerized-software" className='hover:underline'>Containerized Software Introduction</a></h3>
                <Divider className='!mt-1' />

                <p>Consider the Web browser you are using right now to view these words:</p>
                <ol className='list-decimal ml-4 !mt-1'>
                    <li>Unless that browser was installed onto your device from the factory, you first had to download the version of your browser corresponding to your operating system.</li>
                    <li>Then, you installed the browser, perhaps specifying a directory into which its application files were placed.</li>
                    <li>After that, you opened the browser. Perhaps you then signed into a Firefox account, or a Google account.</li>
                    <li>Maybe you then installed an ad blocker extension, or a password manager.</li>
                    <li>You might have navigated to a website and added it to your favorites bar...</li>
                </ol>

                <p>Imagine if you could package up the complete state of your Web browser installation - including its configuration settings, logged-in accounts, extensions, browser history, favorites, and more - and make use of that package on any other computer, regardless of operating system.</p>

                <p>Similarly, imagine if you could package up the complete state of <i>any</i> application - including its dependencies, libraries, configuration files, and application code - and run that package on any other computer...</p>

                <p>I'm happy to share with you that <i>this is possible</i> using open-source software called Docker. A <i>Docker Container</i> is a process executed on a computer that runs its own packaged and configured software. You can learn more about Docker and Docker Containers <a className='underline' target="_blank" href='https://docs.docker.com/get-started/'>here on Docker Docs<ArrowTopRightOnSquareIcon className='h-4 w-4 ml-1 -top-0.5 relative inline-block' /></a>.</p>

                <p><span className='font-semibold'>Many components of Hubs Community Edition runs inside separate Docker Containers.</span> By themselves, these Containers don't know much about each other. For example, if you ran the <code>Reticulum</code> Container on your computer, but didn't run the <code>Dialog WebRTC communication</code> Container, people who connected to your Hub would be able to see each other, but not hear each other.</p>

                <p>So, we need some way for these Containers to connect to each other. We need some way for people who connect to a given Hub to also be able to connect to that Hub's associated Dialog server. We need to be able to, for example, update the Dialog container's code without bringing down the Reticulum container. How do we coordinate all of these Containers? 😵‍💫</p>

                <p className='font-semibold italic'>Kubernetes!</p>
            </div>

            <div className='space-y-2 flex flex-col items-center w-full'>
                <div className='!mt-0 w-full flex justify-center animate-gradient items-center flex-col' style={{ "background": "linear-gradient(331deg, #326CE5 0%, #306be4 48%, #14419f 100%)", "backgroundSize": "400% 400%" }} >
                    <div className='w-full max-w-4xl px-2 py-2'>
                        <div className='w-full flex items-end justify-between gap-2'>
                            <h3 id="kubernetes" className='font-semibold text-xl text-slate-50'><a className="hover:underline" href="#kubernetes">Kubernetes Introduction</a></h3>
                            <StaticImage objectFit='contain' height={48} src='../../images/kubernetes.svg' quality={100} alt="The Kubernetes logo" />
                        </div>
                        <Divider className='!mt-1 border-white/75' />
                    </div>
                </div>

                <div className='w-full space-y-4 max-w-4xl p-2'>
                    <p>Kubernetes, shortened to K8s, acts as an <i>organizer</i> for containerized software.</p>

                    <p>A Kubernetes deployment, called a "cluster," consists of two parts:</p>
                    <ol className='list-decimal !mt-1 ml-4'>
                        <li>🎛️ A <span className='font-semibold'>control plane</span></li>
                        <li>🖥️ One or more <span className='font-semibold'>nodes</span></li>
                    </ol>

                    <p>🎛️ The <span className='font-semibold'>control plane</span> manages the cluster. It is responsible for maintaining the state of the cluster as defined by an administrator.</p>

                    <p>🖥️ The cluster's <span className='font-semibold'>nodes</span> are virtual or physical computers that run software defined by the control plane.</p>

                    <div className='p-4 rounded-md bg-green-50 dark:bg-green-800/20 relative'>
                        <div className='p-1 overflow-clip w-16 absolute top-0.5 left-0 bottom-0 flex items-start justify-center z-0'>
                            <AcademicCapIcon className='text-green-300 dark:text-green-600/40 opacity-50' />
                        </div>
                        <div className='z-10 relative space-y-2'>
                            <p>For example, a Hubs developer might write a configuration file that says "I want my K8s cluster to run version 1.3.0 of the Reticulum server and version 1.0.3 of the Dialog server." The control plane would ingest that configuration file and instruct its nodes to download and run that specific software.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full max-w-4xl space-y-4 p-2'>
                <div>
                    <h3 id="hubs-containers" className='text-xl font-semibold'><a href="#hubs-containerized-services" className='hover:underline'>Hubs' Containerized Services</a></h3>
                    <Divider className='!mt-1' />
                    <p>What follows is a table of each Container that makes up Hubs Community Edition:</p>
                </div>

                <table className='w-full inline-block mt-4 md:w-auto table-auto overflow-x-auto rounded-md'>
                    <thead className='text-xs uppercase bg-slate-700 text-slate-100'>
                        <tr>
                            <th scope="col" className="px-1 py-3">Container</th>
                            <th scope="col" className="px-6 py-3">Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow col1={
                            <div className='flex flex-col items-center gap-0'>
                                <h4 id="container-hubs" className='text-lg font-semibold'><a href="#container-hubs" className='hover:underline'><code>hubs</code></a></h4>
                                <a className='underline text-sm' target="_blank" href='https://github.com/mozilla/hubs/'>(source)<ArrowTopRightOnSquareIconSmall className='h-3 w-3 ml-1 relative inline-block' /></a>
                            </div>
                        } cols={[
                            <p>temp</p>
                        ]} />
                        <TableRow col1={
                            <div className='flex flex-col items-center gap-0'>
                                <h4 id="container-reticulum" className='text-lg font-semibold'><a href="#container-reticulum" className='hover:underline'><code>reticulum</code></a></h4>
                                <a className='underline text-sm' target="_blank" href='https://github.com/mozilla/reticulum/'>(source)<ArrowTopRightOnSquareIconSmall className='h-3 w-3 ml-1 relative inline-block' /></a>
                            </div>
                        } cols={[
                            <p>temp</p>
                        ]} />
                        <TableRow col1={
                            <div className='flex flex-col items-center gap-0'>
                                <h4 id="container-dialog" className='text-lg font-semibold'><a href="#container-dialog" className='hover:underline'><code>dialog</code></a></h4>
                                <a className='underline text-sm' target="_blank" href='https://github.com/mozilla/dialog/'>(source)<ArrowTopRightOnSquareIconSmall className='h-3 w-3 ml-1 relative inline-block' /></a>
                            </div>
                        } cols={[
                            <p>temp</p>
                        ]} />
                        <TableRow col1={
                            <div className='flex flex-col items-center gap-0'>
                                <h4 id="container-spoke" className='text-lg font-semibold'><a href="#container-spoke" className='hover:underline'><code>spoke</code></a></h4>
                                <a className='underline text-sm' target="_blank" href='https://github.com/mozilla/spoke/'>(source)<ArrowTopRightOnSquareIconSmall className='h-3 w-3 ml-1 relative inline-block' /></a>
                            </div>
                        } cols={[
                            <p>temp</p>
                        ]} />
                    </tbody>
                </table>
            </div>

            <HubsDivider className='w-full max-w-6xl' />
        </div >
    )
}