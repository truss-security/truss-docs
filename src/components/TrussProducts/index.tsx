import React from 'react';
import Heading from '@theme/Heading';

export default function TrussProducts(): JSX.Element {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4">
            <div className="text-left px-4">
              <Heading as="h1" className="text-4xl font-bold mb-4">
                Security Intelligence Products
              </Heading>
              <p className="text-gray-600">
                Explore our comprehensive security intelligence products, featuring detailed analysis, threat indicators, and actionable insights for security professionals.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex justify-center items-center">
              <img 
                src="/truss-docs/img/Truss - Product - Page.png"
                alt="Products Interface"
                className="w-full max-w-md h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 