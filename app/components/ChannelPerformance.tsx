interface ChannelData {
  name: string;
  leadGeneration: number;
  conversionRate: number;
}

const channelData: ChannelData[] = [
  { name: 'Facebook', leadGeneration: 24, conversionRate: 15 },
  { name: 'WhatsApp', leadGeneration: 22, conversionRate: 28 },
  { name: 'Community', leadGeneration: 18, conversionRate: 53 },
  { name: 'Email', leadGeneration: 20, conversionRate: 38 },
  { name: 'App Partnership', leadGeneration: 16, conversionRate: 12 },
];

export const ChannelPerformance = () => {
  const getPerformanceColor = (value: number) => {
    if (value >= 40) return 'bg-green-500';
    if (value >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <section id="channel-performance" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Channel Performance Insights</h2>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="space-y-8">
            {channelData.map((channel) => (
              <div key={channel.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{channel.name}</span>
                  <span className="text-sm text-gray-500">
                    Lead Gen: {channel.leadGeneration}% | Conversion: {channel.conversionRate}%
                  </span>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500"
                        style={{ width: `${channel.leadGeneration}%` }}
                      />
                    </div>
                    <div className="mt-1 text-xs text-gray-500">Lead Generation</div>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getPerformanceColor(channel.conversionRate)}`}
                        style={{ width: `${channel.conversionRate}%` }}
                      />
                    </div>
                    <div className="mt-1 text-xs text-gray-500">Conversion Rate</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Findings</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Community engagement shows highest conversion (53%)</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Email marketing maintains strong performance (38%)</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>App partnerships underperforming (12% conversion)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}; 