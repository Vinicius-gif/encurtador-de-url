'use client'

import Banner from '@/components/Banner'
import Boost from '@/components/Boost'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Shorter from '@/components/Shorter'
import Vantagens from '@/components/Vantagens'

export default function Home() {
  return (
    <div>
      <Header/>
      <main>
        <Banner/>
        <Shorter/>
        <Vantagens/>
        <Boost/>
      </main>
      <Footer/>
    </div>
  )
}
