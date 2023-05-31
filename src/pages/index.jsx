import Head from 'next/head'
import MainMenu from '@/components/MainMenu'
import MainSlider from '@/components/MainSlider'
import SecondSlider from '@/components/SecondSlider'
import Services from '@/components/Services'
import WhoWeAre from '@/components/WhoWeAre'
import LatestProjects from '@/components/LatestProjects'
import Workplace from '@/components/Workplace'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blueket - Digital Agency & Portfolio</title>
        <meta name="description" content="digital agency and portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <MainMenu />
      <MainSlider />      
      <SecondSlider />
      <Services />
      <WhoWeAre />
      <LatestProjects />
      <Workplace />
    </>
  )
}
