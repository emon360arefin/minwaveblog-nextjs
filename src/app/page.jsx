'use client'


import Button from '@/components/Shared/Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from './home/HeroSection'
import About from './about/page'
import Homeblog from './home/Homeblog/page'






export default function Home() {


    return (
        <div>
            <HeroSection></HeroSection>
            <Homeblog></Homeblog>
            <About></About>
        </div>
    )
}
