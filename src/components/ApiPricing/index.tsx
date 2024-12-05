import React from 'react';
import Heading from '@theme/Heading';

type FeatureItem = {
  title: string;
  price: number | null;
  interval: string;
  features: { name: string; included: boolean }[];
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Free',
    price: 0,
    interval: '/month',
    features: [
      { name: 'Basic Analytics', included: true },
      { name: 'Up to 10 UI Queries Per Day', included: true },
      { name: 'Basic Support', included: true },
      { name: 'More than 1 API query per hour', included: false },
      { name: 'Automatic Downloads', included: false },
    ],
  },
  {
    title: 'Pro',
    price: 50,
    interval: '/month',
    features: [
      { name: 'Unlimited UI Queries Per Day', included: true },
      { name: 'Unlimited API Queries Per Day', included: true },
      { name: '1 Upload Per Day', included: true },
      { name: 'Larger Discord Channel Access', included: true },
      { name: 'Uploading Security Intelligence', included: false },
    ],
  },
  {
    title: 'Contributor',
    price: 150,
    interval: '/month',
    features: [
      { name: 'Unlimited UI Queries Per Day', included: true },
      { name: 'Unlimited API Queries Per Day', included: true },
      { name: 'Unlimited Uploads Per Day', included: true },
      { name: 'Larger Discord Channel Access', included: true },
      { name: '(Coming Soon) Allow Subscribers to PAY YOU for your intel!', included: true },
    ],
  },
  {
    title: 'Enterprise',
    price: null,
    interval: '/month',
    features: [
      { name: 'Basic Analytics', included: true },
      { name: 'Unlimited Projects', included: true },
      { name: 'Basic Support', included: true },
      { name: 'Advanced Features', included: true },
      { name: 'Priority Support', included: true },
    ],
  }
];

function Feature({title, price, interval, features}: FeatureItem) {
  return (
    <div className="col col--3">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          <div className="mt-4 flex items-baseline text-gray-900 dark:text-white">
            <span className="text-4xl font-extrabold">
              {price === null ? '$' : `$${price}`}
            </span>
            <span className="ml-1 text-xl text-gray-500">{interval}</span>
          </div>

          <div className="mt-6 space-y-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center">
                {feature.included ? (
                  <span className="text-green-500 text-lg font-bold mr-2">✓</span>
                ) : (
                  <span className="text-red-500 text-lg font-bold mr-2">✗</span>
                )}
                <span className={`${
                  feature.name.includes('Coming Soon')
                    ? 'bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded text-yellow-800 dark:text-yellow-200'
                    : 'text-gray-700 dark:text-gray-300'
                }`}>
                  {feature.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ApiPricing(): JSX.Element {
  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center mb-12">
          <Heading as="h1" className="text-3xl font-extrabold mb-4">
            Pricing Plans
          </Heading>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose the perfect plan for your needs
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
