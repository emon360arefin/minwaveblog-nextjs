'use client'


import Button from '@/components/Shared/Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from './home/HeroSection'
import BlogSection from './home/BlogSection'
import HomeBlog from './home/Homeblog/HomeBlog'


export default function Home() {


    return (
        <div>
            <HeroSection></HeroSection>
            <HomeBlog></HomeBlog>
        </div>
    )
}
