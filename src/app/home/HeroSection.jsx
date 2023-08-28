'use client'


import Button from '@/components/Shared/Button/Button'
import Image from 'next/image'
import Link from 'next/link'


export default function HeroSection() {




    const color = 'text-transparent bg-clip-text bg-gradient-to-r from-theme-primary to-theme-secondary'
    return (
        <div className={` select-none py-12 md:py-20 bg-theme-accent`}>
            <div className='max-w-7xl mx-auto px-2 flex md:flex-row flex-col-reverse justify-between items-center w-full my-auto'>

                {/* Left Column */}
                <div className='w-full md:w-1/2 py-6 md:py-0 flex flex-col gap-6 md:pr-16'>
                    <h2 className={`text-4xl md:text-5xl font-bold md:leading-snug ${color}`}>Explore Cognitive Horizons</h2>
                    <h2 className='text-3xl text-slate-600 leading-snug'>Ride the Waves of Thought with MindWave: Explore, Inspire, Evolve!</h2>
                    <p className='text-slate-600 text-lg'>MindWave: Where Minds Unite to Empower Growth and Creativity. </p>

                    <Link href='/dashboard/login'>
                        <Button width='w-56' height="h-10" >Publish Your First Blog</Button>
                    </Link>
                </div>


                {/* Right Column */}
                <div className='w-full md:w-1/2 md:pl-16 select-none'>
                    <Image className='' width={600} height={600} src="/Author-hero-4.svg" alt="" />
                </div>
            </div>
        </div>
    )
}
