'use client'


import Button from '@/components/Shared/Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from './home/HeroSection'
import BlogSection from './home/BlogSection'
import HomeBlog from './home/Homeblog/HomeBlog'
import About from './about/page'


export default function Home() {


    return (
        <div>
            <HeroSection></HeroSection>
            <HomeBlog></HomeBlog>
            <About></About>
        </div>
    )
}
