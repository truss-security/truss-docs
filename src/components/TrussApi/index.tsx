import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const Svg = require('@site/static/img/apiCode.svg').default

export default function TrussApi(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <div className="text--left padding-horiz--md">
              <Heading as="h1" className="hero__title">
                Security RPC
              </Heading>
              <p>The Security RPC service is designed for defenders seeking comprehensive access to security data and protections</p>
            </div>
          </div>
          <div className="col col--6">
            <div className="text--center">
              <Svg className={styles.featureSvg} role="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
