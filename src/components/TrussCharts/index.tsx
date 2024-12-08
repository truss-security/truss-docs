import React from 'react';
import Heading from '@theme/Heading';

export default function TrussCharts(): JSX.Element {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex justify-center items-center">
              <img 
                src="/truss-docs/img/18 - Charts - Regional.png"
                alt="Charts Interface"
                className="w-full max-w-md h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="text-left px-4">
              <Heading as="h1" className="text-4xl font-bold mb-4">
                Visual Analytics
              </Heading>
              <p className="text-gray-600">
                Transform security data into actionable insights with our powerful visualization tools, featuring interactive charts and comprehensive analytics capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 