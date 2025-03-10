interface MarketInsight {
  title: string;
  description: string;
  trend: 'positive' | 'negative' | 'neutral';
  icon: string;
}

const marketInsights: MarketInsight[] = [
  {
    title: 'Growing Market Demand',
    description: 'Increasing demand for quality preschool education in Singapore, driven by rising dual-income families.',
    trend: 'positive',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
  },
  {
    title: 'Digital Experience Preference',
    description: 'Parents increasingly prefer personalized digital experiences in their school selection process.',
    trend: 'positive',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    title: 'Community Engagement',
    description: 'Strong alignment with Supermom&apos;s core strength in community building and engagement.',
    trend: 'positive',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  }
];

const competitiveAdvantages = [
  'Established parent community network',
  'Rich zero-party data insights',
  'Multi-channel marketing expertise',
  'Strong brand recognition in parenting space'
];

export const MarketAnalysis = () => {
  return (
    <section id="market-analysis" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Market Viability Analysis</h2>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {marketInsights.map((insight) => (
            <div
              key={insight.title}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={insight.icon} />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{insight.title}</h3>
              <p className="text-sm text-gray-600">{insight.description}</p>
              <div className="mt-4 flex items-center gap-2">
                {insight.trend === 'positive' && (
                  <>
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span className="text-sm font-medium text-green-600">Positive Trend</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Competitive Advantages</h3>
            <ul className="space-y-4">
              {competitiveAdvantages.map((advantage) => (
                <li key={advantage} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-sm p-8 text-white">
            <h3 className="text-xl font-semibold mb-6">Market Opportunity</h3>
            <p className="mb-6">
              The convergence of growing market demand, digital transformation in education, and
              Supermom's unique positioning creates a significant opportunity for success in the
              preschool marketing space.
            </p>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="font-medium">High Growth Potential</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-2">Parent Preferences</h4>
          <p className="text-sm text-gray-600">
            Understanding parents&apos; priorities in preschool selection
          </p>
        </div>
      </div>
    </section>
  );
}; 