interface Template {
  type: 'email' | 'whatsapp';
  version: 'current' | 'improved';
  elements: {
    title: string;
    description: string;
    improvements: string[];
  }[];
}

const communicationTemplates: Template[] = [
  {
    type: 'email',
    version: 'improved',
    elements: [
      {
        title: 'Value Proposition Email',
        description: 'Focus on educational benefits with clear savings',
        improvements: [
          '🎯 Clear headline: "Save $7,897 + Premium Education"',
          '✨ Visual savings calculator',
          '🏫 School accreditation badges',
          '👨‍👩‍👧‍👦 Parent testimonial section',
          '⏰ Countdown timer for urgency',
          '📋 Clear next steps checklist'
        ]
      },
      {
        title: 'Scholarship Offer Email',
        description: 'Emphasize exclusivity and benefits',
        improvements: [
          '🎓 "Reserved Spot" messaging',
          '💰 Detailed savings breakdown',
          '📊 Visual comparison with regular fees',
          '🗣️ Success stories from current parents',
          '❓ FAQ section with common concerns',
          '🔄 Easy application process steps'
        ]
      }
    ]
  },
  {
    type: 'whatsapp',
    version: 'improved',
    elements: [
      {
        title: 'Scholarship Alert Message',
        description: 'Engaging and action-oriented WhatsApp communication',
        improvements: [
          '👋 Personalized greeting',
          '🎉 Clear offer highlight (25% OFF + 3 Months FREE)',
          '💫 Social proof: "200+ parents already enrolled"',
          '📅 Specific deadline date',
          '🔵 Clickable CTA button',
          '📱 Quick reply options'
        ]
      },
      {
        title: 'Follow-up Sequence',
        description: 'Nurturing message series',
        improvements: [
          '📊 Application status updates',
          '🎯 Personalized next steps',
          '💡 Educational tips and insights',
          '👥 Parent community highlights',
          '❓ FAQ and support options',
          '🔔 Reminder system'
        ]
      }
    ]
  }
];

export const CommunicationStrategy = () => {
  return (
    <section id="communication-strategy" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Enhanced Communication Strategy</h2>

        <div className="space-y-12">
          {communicationTemplates.map((template) => (
            <div key={template.type} className="bg-white rounded-xl shadow-sm border border-pink-100 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 capitalize">
                {template.type} Communication Improvements
              </h3>
              <div className="grid gap-8 md:grid-cols-2">
                {template.elements.map((element) => (
                  <div key={element.title} className="space-y-4">
                    <div className="bg-pink-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900">{element.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{element.description}</p>
                    </div>
                    <ul className="space-y-3">
                      {element.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-gray-600">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-pink-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-medium text-gray-900">Implementation Notes</h4>
              <p className="mt-1 text-sm text-gray-600">
                All communications should maintain consistent branding while being platform-optimized.
                Test different variations of messages and track engagement metrics to continuously improve performance.
                Ensure all CTAs are clear and easily actionable across all platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 