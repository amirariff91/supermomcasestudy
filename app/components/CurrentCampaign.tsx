interface Metric {
  label: string;
  value: string;
  description: string;
  trend: 'up' | 'down' | 'neutral';
}

interface SchoolMetrics {
  name: string;
  totalLeads: number;
  convertedLeads: number;
  conversionRate: number;
  locations: string[];
  fees: string;
  valueProposition: string[];
}

interface ChannelMetrics {
  name: string;
  rawLeads: number;
  contribution: number;
  contactable: number;
  acceptedLeads: number;
  schoolTour: number;
  conversionRates: {
    toContactable: number;
    toAccepted: number;
    toTour: number;
  };
  improvements?: string[];
}

const schoolData: SchoolMetrics[] = [
  {
    name: 'MMI',
    totalLeads: 34,
    convertedLeads: 15,
    conversionRate: 44,
    locations: [
      'MMI Bukit Batok',
      'MMI Choa Chu Kang',
      'MMI Compassvale',
      'MMI Holland Grove',
      'MMI Pinnacle@Duxton',
      'MMI Woodlands'
    ],
    fees: 'SGD 1,600 per month',
    valueProposition: [
      'Affordable Excellence in Education',
      'Proven Learning Methodology',
      'Experienced Teaching Staff',
      'Convenient Locations',
      'Strong Parent Community'
    ]
  },
  {
    name: 'MindChamps',
    totalLeads: 16,
    convertedLeads: 10,
    conversionRate: 62.5,
    locations: [
      'MindChamps JTC Summit',
      'MindChamps Thomson (Chinese)'
    ],
    fees: 'SGD 2,400 per month',
    valueProposition: [
      'Premium Early Learning Experience',
      'Champion Mindset Development',
      'Bilingual Immersion Program',
      'Research-Based Curriculum',
      'Exclusive Learning Environment'
    ]
  }
];

const channelData: ChannelMetrics[] = [
  {
    name: 'Facebook Ads',
    rawLeads: 121,
    contribution: 24,
    contactable: 8,
    acceptedLeads: 4,
    schoolTour: 0,
    conversionRates: {
      toContactable: 6.6,
      toAccepted: 50.0,
      toTour: 0.0
    },
    improvements: [
      'Enhanced targeting by parent interests',
      'Improved ad creative with social proof',
      'Location-based campaign optimization',
      'Lead form optimization'
    ]
  },
  {
    name: 'WhatsApp Marketing',
    rawLeads: 115,
    contribution: 22,
    contactable: 41,
    acceptedLeads: 18,
    schoolTour: 5,
    conversionRates: {
      toContactable: 35.7,
      toAccepted: 43.9,
      toTour: 27.8
    }
  },
  {
    name: 'Email Marketing',
    rawLeads: 50,
    contribution: 10,
    contactable: 19,
    acceptedLeads: 12,
    schoolTour: 2,
    conversionRates: {
      toContactable: 38.0,
      toAccepted: 63.2,
      toTour: 16.7
    }
  },
  {
    name: 'Community',
    rawLeads: 17,
    contribution: 3,
    contactable: 9,
    acceptedLeads: 4,
    schoolTour: 0,
    conversionRates: {
      toContactable: 52.9,
      toAccepted: 44.4,
      toTour: 0.0
    }
  },
  {
    name: 'CDP Website',
    rawLeads: 8,
    contribution: 2,
    contactable: 1,
    acceptedLeads: 0,
    schoolTour: 0,
    conversionRates: {
      toContactable: 12.5,
      toAccepted: 0.0,
      toTour: 0.0
    },
    improvements: [
      'Enhanced UX/UI design',
      'Interactive school comparison tool',
      'Virtual tour integration',
      'Improved mobile experience'
    ]
  },
  {
    name: 'Partnerships & Referrals',
    rawLeads: 65,
    contribution: 12,
    contactable: 24,
    acceptedLeads: 11,
    schoolTour: 0,
    conversionRates: {
      toContactable: 36.9,
      toAccepted: 45.8,
      toTour: 0.0
    }
  }
];

const metrics = [
  {
    label: 'Database Reach',
    value: '80,000',
    description: 'Target parent base (Q3 2024)',
    trend: 'up' as const
  },
  {
    label: 'Raw Leads',
    value: '512',
    description: 'Total inquiries',
    trend: 'up' as const
  },
  {
    label: 'Contactable',
    value: '116',
    description: '22.7% conversion rate',
    trend: 'neutral' as const
  },
  {
    label: 'School Tours',
    value: '9',
    description: '18.0% from accepted leads',
    trend: 'down' as const
  }
];

const funnelAnalysis = [
  {
    stage: 'Lead Generation',
    total: 512,
    insights: [
      'WhatsApp channels lead with 22% of leads',
      'Facebook ads second at 24%',
      'Partnerships contribute 12% of leads'
    ]
  },
  {
    stage: 'Lead Qualification',
    total: 116,
    insights: [
      '22.7% overall contact rate',
      'Community leads highest quality (52.9%)',
      'Facebook showing 6.6% contact rate'
    ]
  },
  {
    stage: 'Client Acceptance',
    total: 50,
    insights: [
      '43.1% acceptance from contactable',
      'Email leads highest acceptance (63.2%)',
      'WhatsApp leads highest volume (18)'
    ]
  },
  {
    stage: 'School Tours',
    total: 9,
    insights: [
      '18.0% tour conversion rate',
      'WhatsApp leads: 5 tours',
      'Email: 2, Facebook: 0, Community: 0'
    ]
  }
];

const parentConcerns = [
  {
    topic: 'Curriculum Quality',
    sentiment: 'mixed',
    keyQuotes: [
      'Curriculum is not bad as well, I feel the teachers are also more patient',
      'Montessori is basically learning the skills',
      'How about their curriculum in their other outdoor activities?'
    ]
  },
  {
    topic: 'Teacher Quality',
    sentiment: 'positive',
    keyQuotes: [
      'Teachers are more patient compared to some schools',
      'Looking for feedback about teachers',
      'Want to know about teacher-student ratio'
    ]
  },
  {
    topic: 'Learning Environment',
    sentiment: 'neutral',
    keyQuotes: [
      'Kids will learn better in MMI schools',
      'Looking for more feedback about daily activities',
      'Interested in the facilities and environment'
    ]
  }
];

const keyIssues = [
  {
    title: 'Database Activation & Segmentation',
    description: 'Leverage 80,000 parent database effectively',
    recommendations: [
      'Segment parents by child age (18mo-5yr)',
      'Create location-based targeting for 8 schools',
      'Develop price-point specific messaging (1.6k vs 2.4k)'
    ]
  },
  {
    title: 'Lead Quality & Channel Optimization',
    description: 'Improve quality across channels (23% contact rate)',
    recommendations: [
      'Enhance WhatsApp qualification (48% of leads)',
      'Optimize Facebook forms (7% contact rate)',
      'Scale email marketing (63% acceptance rate)'
    ]
  },
  {
    title: 'School-Specific Conversion',
    description: 'Balance school distribution and improve tour rates',
    recommendations: [
      'MMI: Improve 44% conversion across 6 locations',
      'MindChamps: Scale 62.5% success rate to more leads',
      'Develop location-specific parent testimonials'
    ]
  },
  {
    title: 'Parent Engagement Strategy',
    description: 'Address key parent concerns in marketing',
    recommendations: [
      'Highlight teacher quality',
      'Create curriculum comparison guides',
      'Develop virtual tour content for facilities'
    ]
  }
];

export const CurrentCampaign = () => {
  const getTrendIcon = (trend: Metric['trend']) => {
    switch (trend) {
      case 'up':
        return (
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      case 'down':
        return (
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />
          </svg>
        );
    }
  };

  return (
    <section id="current-campaign" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Campaign Performance Analysis</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-white p-6 rounded-xl shadow-sm border border-pink-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-600">{metric.label}</span>
                {getTrendIcon(metric.trend)}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className="text-sm text-gray-500">{metric.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Channel Performance</h3>
          <div className="space-y-8">
            {channelData.map((channel) => (
              <div key={channel.name} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-pink-100">
                      <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{channel.name}</h4>
                      <p className="text-sm text-gray-500">{channel.contribution}% of total leads</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{channel.rawLeads} Raw Leads</div>
                    <div className="text-sm text-green-600">{channel.contactable} Contactable</div>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Contact Rate</span>
                    <span className="font-medium text-gray-900">{channel.conversionRates.toContactable}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        channel.conversionRates.toContactable >= 40 ? 'bg-green-500' :
                        channel.conversionRates.toContactable >= 25 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${channel.conversionRates.toContactable}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Acceptance Rate</span>
                    <span className="font-medium text-gray-900">{channel.conversionRates.toAccepted}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        channel.conversionRates.toAccepted >= 50 ? 'bg-green-500' :
                        channel.conversionRates.toAccepted >= 30 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${channel.conversionRates.toAccepted}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Funnel Analysis</h3>
          <div className="space-y-8">
            {funnelAnalysis.map((stage) => (
              <div key={stage.stage} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-gray-900">{stage.stage}</h4>
                  <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">
                    {stage.total} leads
                  </span>
                </div>
                <ul className="space-y-2">
                  {stage.insights.map((insight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-pink-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {insight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">School Performance</h3>
          <div className="space-y-8">
            {schoolData.map((school) => (
              <div key={school.name} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-pink-100">
                      <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{school.name}</h4>
                      <p className="text-sm text-gray-500">{school.fees}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{school.convertedLeads}/{school.totalLeads} Leads</div>
                    <div className="text-sm text-green-600">{school.conversionRate}% Conversion</div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm font-medium text-gray-600 mb-2">Locations ({school.locations.length})</div>
                  <div className="flex flex-wrap gap-2">
                    {school.locations.map((location) => (
                      <span key={location} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                        {location}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Parent Voice Analysis</h3>
          <div className="space-y-8">
            {parentConcerns.map((concern) => (
              <div key={concern.topic} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-pink-100">
                      <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{concern.topic}</h4>
                      <p className="text-sm text-gray-500">{concern.keyQuotes.length} mentions</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    concern.sentiment === 'positive' ? 'bg-green-100 text-green-700' :
                    concern.sentiment === 'negative' ? 'bg-red-100 text-red-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {concern.sentiment}
                  </span>
                </div>
                <div className="space-y-3 mt-4">
                  {concern.keyQuotes.map((quote, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-gray-400 mt-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-sm text-gray-600 italic">{quote}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Strategic Recommendations</h3>
          <div className="space-y-8">
            {keyIssues.map((issue) => (
              <div key={issue.title} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <svg className="w-5 h-5 text-pink-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">{issue.title}</h4>
                    <p className="text-gray-600 mt-1">{issue.description}</p>
                  </div>
                </div>
                <div className="ml-8">
                  <h5 className="text-sm font-medium text-gray-900 mb-2">Action Items:</h5>
                  <ul className="space-y-2">
                    {issue.recommendations.map((rec) => (
                      <li key={rec} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 