import Head from 'next/head'
import Hero from '../components/Hero'
import Instagram from '../components/Instagram'
import Slider from '../components/Slider'
import {SliderData} from '../components/SliderData'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Hi-Res Photography' message='capturing moments in nature and keeping them alive' />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  )
}
