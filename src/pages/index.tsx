import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import TrussApi from '@site/src/components/TrussApi';
import ApiPricing from '@site/src/components/ApiPricing';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}
/** Video button:
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/">
            Truss Overview Video - 5min ⏱️
          </Link>
        </div> 
 */

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Truss documentation">
      <HomepageHeader />
      <main>
        <TrussApi />
        <ApiPricing />
      </main>
    </Layout>
  );
}
