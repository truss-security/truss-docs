import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  features: string[],
  cost: number;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Starter',
    features: [
      ' 1 User', 
      ' Access to Security API'
    ],
    cost: 0,
    description: "100% Free to use",
  },
  {
    title: 'Analyst',
    features: [
      ' Up to 2 Users', 
      ' Access to Security API',
      ' Access to Truss Dashboard'
    ],
    cost: 60,
    description: "Per month ($720 per year)",
  },
  {
    title: 'Team',
    features: [
      ' Up to 5 Users', 
      ' Access to Security API',
      ' Access to Truss Dashboard'
    ],
    cost: 180,
    description: "Per month ($2160 per year)",
  },
];

function Feature({title, features, cost, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="card">
        <div className="card__body">
          <div className="text--left padding-horiz--md">
            <Heading as="h2">{title}</Heading>
          </div>
          <div className="text--left padding-horiz--md">
            {features.map((feature) => (
            <p>✓ {feature}</p>
          ))}
          </div>
          <div className="text--center padding-horiz--md">
            <Heading as="h1">${cost}</Heading>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ApiPricing(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center padding-horiz--md">
          <Heading as="h1" className="hero__title">
            Get Truss
          </Heading>
          <p>Find the best Truss plan for your project. You can switch or cancel at anytime.</p>
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
