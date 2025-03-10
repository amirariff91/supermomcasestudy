const budgetAllocation = [
  {
    category: 'Digital Channels & Referrals',
    allocation: 40,
    items: [
      'Facebook & Digital Ads: 20%',
      'Website & UX Enhancement: 10%',
      'Referral Program: 10%'
    ]
  },
  {
    category: 'Content & Experience',
    allocation: 35,
    items: [
      'Brand-specific Content: 15%',
      'Virtual Tours & Interactive Tools: 10%',
      'Parent Education Program: 10%'
    ]
  },
  {
    category: 'Technology & Analytics',
    allocation: 25,
    items: [
      'AI & Predictive Analytics: 10%',
      'Marketing Automation: 10%',
      'Performance Tracking: 5%'
    ]
  }
];

const kpis = [
  {
    category: 'Data Activation',
    metrics: [
      { name: 'Zero-Party Data Collection', target: '40% of 80k base' },
      { name: 'School Preference Mapping', target: '100% coverage' },
      { name: 'Parent Insights Generated', target: '5000+ data points' }
    ]
  },
  {
    category: 'Channel Performance',
    metrics: [
      { name: 'Facebook Contact Rate', target: '30% (from 6.6%)' },
      { name: 'CDP Website Leads', target: '15% (from 2%)' },
      { name: 'WhatsApp Contact Rate', target: '45% (from 35.7%)' }
    ]
  },
  {
    category: 'Conversion Metrics',
    metrics: [
      { name: 'Overall Contact Rate', target: '35% (from 22.7%)' },
      { name: 'Tour Conversion', target: '35% (from 18%)' },
      { name: 'Lead to Enrollment', target: '15% overall' }
    ]
  },
  {
    category: 'Enrollment Impact',
    metrics: [
      { name: 'Monthly Enrollments', target: '50+ per month' },
      { name: 'Cost per Enrollment', target: '20% reduction' },
      { name: 'New Channel Contribution', target: '30% of leads' }
    ]
  }
];

export const BudgetKPI = () => {
  return (
    <section 
      id="budget-kpi" 
      className="py-16 bg-gray-50"
      aria-labelledby="budget-kpi-title"
      role="region"
    >
      <div className="max-w-4xl mx-auto">
        <h2 id="budget-kpi-title" className="text-3xl font-bold text-gray-900 mb-8">Budget & KPIs</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div 
            className="bg-white rounded-xl shadow-sm border border-pink-100 p-8"
            role="region"
            aria-labelledby="budget-allocation-title"
          >
            <h3 id="budget-allocation-title" className="text-xl font-semibold text-gray-900 mb-6">Budget Allocation</h3>
            <div className="space-y-6">
              {budgetAllocation.map((category) => (
                <div 
                  key={category.category}
                  role="group"
                  aria-labelledby={`${category.category.toLowerCase().replace(/\s+/g, '-')}-title`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span 
                      id={`${category.category.toLowerCase().replace(/\s+/g, '-')}-title`}
                      className="font-medium text-gray-900"
                    >
                      {category.category}
                    </span>
                    <span 
                      className="text-sm font-medium text-pink-600"
                      aria-label={`${category.allocation}% allocation`}
                    >
                      {category.allocation}%
                    </span>
                  </div>
                  <div 
                    className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2"
                    role="progressbar"
                    aria-valuenow={category.allocation}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-full bg-pink-500"
                      style={{ width: `${category.allocation}%` }}
                    />
                  </div>
                  <ul 
                    className="space-y-1"
                    aria-label={`${category.category} breakdown`}
                  >
                    {category.items.map((item, index) => (
                      <li key={index} className="text-sm text-gray-600">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="bg-white rounded-xl shadow-sm border border-pink-100 p-8"
            role="region"
            aria-labelledby="kpi-title"
          >
            <h3 id="kpi-title" className="text-xl font-semibold text-gray-900 mb-6">Key Performance Indicators</h3>
            <div className="space-y-8">
              {kpis.map((category) => (
                <div 
                  key={category.category}
                  role="group"
                  aria-labelledby={`${category.category.toLowerCase().replace(/\s+/g, '-')}-title`}
                >
                  <h4 
                    id={`${category.category.toLowerCase().replace(/\s+/g, '-')}-title`}
                    className="font-medium text-gray-900 mb-4"
                  >
                    {category.category}
                  </h4>
                  <div className="space-y-4">
                    {category.metrics.map((metric) => (
                      <div 
                        key={metric.name} 
                        className="flex items-center justify-between"
                        role="listitem"
                      >
                        <span className="text-sm text-gray-600">{metric.name}</span>
                        <span 
                          className="text-sm font-medium text-pink-600"
                          aria-label={`Target: ${metric.target}`}
                        >
                          {metric.target}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div 
          className="mt-8 bg-blue-50 rounded-lg p-6"
          role="note"
          aria-label="ROI Focus Information"
        >
          <div className="flex items-start gap-3">
            <svg 
              className="w-6 h-6 text-blue-500 mt-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-medium text-blue-900">ROI Focus</h4>
              <p className="mt-1 text-sm text-blue-700">
                Budget allocation prioritizes channels with proven conversion rates while maintaining
                experimental budget for emerging opportunities. KPIs are set to track both immediate
                results and long-term value creation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 