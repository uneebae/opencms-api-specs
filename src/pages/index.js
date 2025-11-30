import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import OpenCMSImage from '../assets/OpenCMS.png';
import OpenCMSLogo from '../assets/OpenCMSLogo.png';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.futuristicHeader}>
      <div className={styles.backgroundAnimation}></div>
      <div className={styles.floatingElements}>
        <div className={styles.floatingBox1}></div>
        <div className={styles.floatingBox2}></div>
        <div className={styles.floatingBox3}></div>
      </div>
      
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <img
            src={OpenCMSLogo}
            alt="Open CMS Logo"
            className={styles.logo}
          />
        </div>
        
        <h1 className={styles.mainTitle}>
          Open CMS
        </h1>
        
        <p className={styles.subtitle}>
          Card Management System
        </p>
        
        <div className={styles.divider}></div>
        
        <p className={styles.description}>
          Welcome to the next generation of Card Lifecycle Management. OpenCMS is a secure, 
          intelligent platform designed for banks, fintechs, and financial institutions. 
          Manage card issuance, activation, limits, and preferences through powerful RESTful APIs.
        </p>

        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>Lightning Fast</h3>
            <p>Real-time card operations</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔒</div>
            <h3>Enterprise Security</h3>
            <p>JWT & HTTPS encrypted</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌐</div>
            <h3>Global Scale</h3>
            <p>Multi-currency support</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📊</div>
            <h3>Full Control</h3>
            <p>Complete lifecycle management</p>
          </div>
        </div>

        <div className={styles.ctaContainer}>
          <Link className={styles.ctaButton} to="/docs/introduction">
            Get Started
          </Link>
          <Link className={styles.ctaButtonSecondary} to="/docs/APISpecification">
            API Reference
          </Link>
        </div>

        <div className={styles.imageContainer}>
          <img
            src={OpenCMSImage}
            alt="Open CMS"
            className={styles.heroImage}
          />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Card Management System`}
      description="Enterprise-grade Card Lifecycle Management API">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
