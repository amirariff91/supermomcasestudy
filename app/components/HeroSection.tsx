import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="relative py-16">
      <section id="overview" className="pt-20 pb-16 bg-gradient-to-br from-pink-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <div className="relative h-12 w-32">
              <Image
                src="/mindchamps-logo.png"
                alt="MindChamps"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="relative h-12 w-32">
              <Image
                src="/mmi-logo.png"
                alt="MMI"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Building Trust Through
            <span className="block text-pink-600">Educational Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Enhancing Parent Confidence in Preschool Selection
          </p>
          <div className="bg-pink-50 rounded-xl p-4 mb-8 inline-block">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium">Amir Ariff</span>
              </div>
              <div className="hidden md:block text-pink-300">•</div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Campaign Manager - Lead Generation</span>
              </div>
              <div className="hidden md:block text-pink-300">•</div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>March 2025</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-6 mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Parent Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-pink-100">
                  <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Educational Focus</span>
                  <p className="text-sm text-gray-600">&ldquo;Montessori is basically learning life skills&rdquo; - Parent Feedback</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-pink-100">
                  <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Parent Community</span>
                  <p className="text-sm text-gray-600">Active discussions in parent groups seeking authentic feedback</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-pink-100 hover:border-pink-200 transition-colors">
              <div className="text-4xl font-bold text-pink-600 mb-2">512</div>
              <div className="text-gray-600">Parent Inquiries</div>
              <div className="text-sm text-pink-400 mt-2">Since Q3 2024</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-pink-100 hover:border-pink-200 transition-colors">
              <div className="text-4xl font-bold text-pink-600 mb-2">22.7%</div>
              <div className="text-gray-600">Contact Rate</div>
              <div className="text-sm text-pink-400 mt-2">116 Qualified Leads</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-pink-100 hover:border-pink-200 transition-colors">
              <div className="text-4xl font-bold text-pink-600 mb-2">18.0%</div>
              <div className="text-gray-600">Tour Rate</div>
              <div className="text-sm text-pink-400 mt-2">From Accepted Leads</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl shadow-sm p-6 text-white">
            <h3 className="text-lg font-semibold mb-4">Strategic Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">Trust</div>
                <div className="text-sm text-pink-100">Social Proof & Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">Education</div>
                <div className="text-sm text-pink-100">Curriculum Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">Community</div>
                <div className="text-sm text-pink-100">Parent Engagement</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}; 