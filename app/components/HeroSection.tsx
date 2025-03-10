import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 overflow-hidden">
      <div className="absolute right-0 top-0 -mr-32 mt-8">
        <Image
          src="/images/pattern-1.svg"
          alt="Background pattern"
          width={384}
          height={384}
          className="opacity-50"
        />
      </div>
      <div className="absolute left-0 bottom-0 -ml-32 mb-8">
        <Image
          src="/images/pattern-2.svg"
          alt="Background pattern"
          width={384}
          height={384}
          className="opacity-50"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Supermom&apos;s Zero-Party Data Activation
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transforming parent data into preschool enrollments through strategic marketing and personalized experiences
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 px-6 py-4">
              <div className="text-3xl font-bold text-pink-600">80,000+</div>
              <div className="text-sm text-gray-600">Parent Profiles</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 px-6 py-4">
              <div className="text-3xl font-bold text-pink-600">90 Days</div>
              <div className="text-sm text-gray-600">Strategic Plan</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 px-6 py-4">
              <div className="text-3xl font-bold text-pink-600">50+</div>
              <div className="text-sm text-gray-600">Monthly Enrollments</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Case Study Overview</h2>
          <p className="text-gray-600 mb-6">
            As Supermom&apos;s Campaign Manager, our mission is to leverage our extensive zero-party data to drive preschool enrollments. We&apos;re focusing on transforming our 80,000+ parent profiles into qualified leads and successful enrollments for our partner schools.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Primary Objectives</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Expand zero-party data services to preschool education sector</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Drive enrollment growth for partner preschool brands</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Key Challenges</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-pink-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-600">Low contact and conversion rates in existing channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-pink-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-600">Need for clear brand differentiation between school partners</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 