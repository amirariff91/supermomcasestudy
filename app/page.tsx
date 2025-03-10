import { HeroSection } from './components/HeroSection'
import { Navigation } from './components/Navigation'
import { CurrentCampaign } from './components/CurrentCampaign'
import { ChannelPerformance } from './components/ChannelPerformance'
import { StrategicRoadmap } from './components/StrategicRoadmap'
import { BudgetKPI } from './components/BudgetKPI'
import { MarketAnalysis } from './components/MarketAnalysis'

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
