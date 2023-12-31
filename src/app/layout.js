import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import ThemeProvider from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
    title: 'Mindwave',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <ThemeProvider>
                    <Navbar></Navbar>
                    {children}
                    <Footer></Footer>
                </ThemeProvider>
            </body>
        </html>
    )
}
