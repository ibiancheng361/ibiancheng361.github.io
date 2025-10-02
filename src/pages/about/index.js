import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          about me
        </Heading>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go2 into a meta tag in <head />">
      <HomepageHeader />
      <main>
            <div className={styles.aboutBody}>
          <div className="container">
            <div className="row padding-bottom--lg">
			

              <div className="col col--9">
                <p>
                I'm Ali'imuamua Ron Amosa, aka <a href="https://news.uncommonengineer.com/about" target="_blank" rel="noopener noreferrer">"The Uncommon Engineer"</a>.
                </p>
				<p>
                <br/>
                A Pasifika technologist with Samoan, Tuvaluan, and Chinese heritage. With over two decades of engineering experience, I currently serve as a Senior Solution Architect at AWS, specializing in AI, containers, Kubernetes, and cloud security. My journey through SRE, Cyber Security, and Solution Architecture has given me a comprehensive view of the tech stack, from infrastructure, to code, risk and business outcomes.
                </p>
                <p>
                This website is my digital lab book, mainly random, unfiltered record of experiments, technical documentation, and ongoing learnings. Here, I'll scribble down anything that I find interesting, and share my thoughts on the tech industry, when it's not already in my newsletter.
                <br/>
                <br/>
                I'm also a husband, father, a BJJ black belt, Drummer, tattoo and motorcycle enthusiast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
