import React from 'react';
import Heading from '@theme/Heading';

const Svg = require('@site/static/img/apiCode.svg').default;

export default function TrussApi(): JSX.Element {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4">
            <div className="text-left px-4">
              <Heading as="h1" className="text-4xl font-bold mb-4">
                Truss API
              </Heading>
              <p className="text-gray-600">
                The Truss API service is designed for defenders seeking comprehensive and programmatic access to security data and protections
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex justify-center items-center">
              <Svg className="w-full max-w-md h-auto" role="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
