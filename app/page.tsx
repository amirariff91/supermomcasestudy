import { HeroSection } from './components/HeroSection'
import { Navigation } from './components/Navigation'
import { CurrentCampaign } from './components/CurrentCampaign'
import { ChannelPerformance } from './components/ChannelPerformance'
import dynamic from 'next/dynamic'
import { MarketAnalysis } from './components/MarketAnalysis'
import { ComponentType } from 'react'

const BudgetKPI = dynamic(() => import('./components/BudgetKPI').then(mod => mod.BudgetKPI as ComponentType), {
  loading: () => (
    <div className="animate-pulse bg-gray-100 h-96 rounded-lg" role="progressbar" aria-label="Loading BudgetKPI component" />
  )
});

const StrategicRoadmap = dynamic(() => import('./components/StrategicRoadmap').then(mod => mod.StrategicRoadmap as ComponentType), {
  loading: () => (
    <div className="animate-pulse bg-gray-100 h-96 rounded-lg" role="progressbar" aria-label="Loading StrategicRoadmap component" />
  )
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      <div className="container mx-auto px-4 py-8 space-y-24">
        <HeroSection />
        <CurrentCampaign />
        <ChannelPerformance />
        <StrategicRoadmap />
        <BudgetKPI />
        <MarketAnalysis />
      </div>
    </main>
  )
}
