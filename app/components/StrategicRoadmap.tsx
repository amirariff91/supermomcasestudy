interface Phase {
  number: number;
  title: string;
  duration: string;
  initiatives: {
    title: string;
    description: string;
    tasks: string[];
  }[];
}

const phases: Phase[] = [
  {
    number: 1,
    title: 'Zero-Party Data Activation',
    duration: 'April 2025',
    initiatives: [
      {
        title: 'Database Enrichment',
        description: 'Activate & enrich 80,000 parent profiles',
        tasks: [
          'Segment by child age (18mo-5yr)',
          'Collect school preferences data',
          'Map budget sensitivity (1.6k-2.4k)',
          'Gather education priorities'
        ]
      },
      {
        title: 'Community Engagement',
        description: 'Leverage Supermom platform strengths',
        tasks: [
          'Activate parenting community discussions',
          'Launch school review program',
          'Create education content series',
          'Deploy survey campaigns'
        ]
      },
      {
        title: 'School-Specific Strategy',
        description: 'Differentiated approach per brand',
        tasks: [
          'MMI: Affordable excellence positioning',
          'MindChamps: Premium experience focus',
          'Map location-based parent clusters',
          'Create school comparison tools'
        ]
      }
    ]
  },
  {
    number: 2,
    title: 'Lead Quality & Conversion',
    duration: 'May 2025',
    initiatives: [
      {
        title: 'Channel Performance',
        description: 'Optimize existing channels',
        tasks: [
          'Improve Facebook contact (6.6% → 30%)',
          'Enhance WhatsApp funnel (35.7% → 45%)',
          'Scale email success (63.2% acceptance)',
          'Revamp CDP website (2% → 15%)'
        ]
      },
      {
        title: 'New User Acquisition',
        description: 'Launch new acquisition channels',
        tasks: [
          'Implement referral rewards program',
          'Launch parent influencer campaign',
          'Create location-based targeting',
          'Deploy educational webinars'
        ]
      },
      {
        title: 'Conversion Optimization',
        description: 'Improve tour conversion (18% → 35%)',
        tasks: [
          'Create virtual tour experience',
          'Develop school visit program',
          'Launch teacher meet sessions',
          'Implement trial class system'
        ]
      }
    ]
  },
  {
    number: 3,
    title: 'Enrollment Acceleration',
    duration: 'June 2025',
    initiatives: [
      {
        title: 'Data-Driven Targeting',
        description: 'Leverage zero-party data insights',
        tasks: [
          'Deploy predictive modeling',
          'Create persona-based journeys',
          'Implement smart segmentation',
          'Launch targeted campaigns'
        ]
      },
      {
        title: 'Conversion Acceleration',
        description: 'Target 50+ monthly enrollments',
        tasks: [
          'Optimize high-intent segments',
          'Scale successful channels',
          'Launch last-mile conversion program',
          'Implement price-point strategies'
        ]
      },
      {
        title: 'Community Amplification',
        description: 'Scale through word-of-mouth',
        tasks: [
          'Activate parent ambassadors',
          'Scale review program',
          'Launch success stories',
          'Create referral networks'
        ]
      }
    ]
  }
];

export const StrategicRoadmap = () => {
  return (
    <section id="strategic-roadmap" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">90-Day Strategic Roadmap</h2>

        <div className="space-y-8">
          {phases.map((phase) => (
            <div key={phase.number} className="bg-white rounded-xl shadow-sm border border-pink-100 p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
                  {phase.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                    <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                      {phase.duration}
                    </span>
                  </div>
                  <div className="grid gap-6 md:grid-cols-3">
                    {phase.initiatives.map((initiative) => (
                      <div
                        key={initiative.title}
                        className="p-4 bg-gray-50 rounded-lg border border-gray-100"
                      >
                        <h4 className="font-medium text-gray-900 mb-2">{initiative.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{initiative.description}</p>
                        <ul className="space-y-2">
                          {initiative.tasks.map((task, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                              <svg className="w-4 h-4 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 