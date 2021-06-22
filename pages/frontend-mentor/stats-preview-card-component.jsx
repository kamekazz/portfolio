import styles from '../../styles/stats-preview-card-component.module.css';
import { useSpring, animated } from 'react-spring';
import Head from 'next/head';

export default function StatsPreviewComponent() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lexend+Deca&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.bodyContainer}>
        <div className={styles.main}>
          <ImageSide />
          <TextContainer />
        </div>
        <div className={styles.deskPaddingBottom} />
      </div>
    </>
  );
}

const TextContainer = () => {
  return (
    <div className={styles.textContainer}>
      <h1>
        Get <span>insights</span> that help your business grow.
      </h1>
      <p className={styles.textBlock}>
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </p>

      <div className={styles.numbersContainer}>
        <Canter amount={10} type={'companies'} value={'K+'} />
        <Canter amount={314} type={'Templates'} value={''} />
        <Canter amount={12} type={'Queries'} value={'M+'} />
      </div>
    </div>
  );
};

const Canter = ({ amount, type, value }) => {
  const props = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: 0, val: amount, color: '#aa5cdb' });
      await next({ opacity: 1, val: amount, color: '#aa5cdb' });
      await next({ opacity: 1, val: amount, color: '#ffffff' });
    },
    from: { opacity: 0, val: 0, color: '#ffffff' },
  });
  return (
    <div className={styles.number}>
      <p className={styles.textNumbers}>10k+</p>
      <p className={styles.textCats}>companies</p>
    </div>
  );
};

Canter.defaultProps = {
  amount: 'secondary',
  type: 'Button Text',
};

const ImageSide = () => {
  return (
    <div className={styles.hero}>
      <img
        className={styles.mobileImg}
        src="/images/image-header-mobile.jpg"
        alt="image-header-mobile"
      />
      <img
        className={styles.desktopImg}
        src="/images/image-header-desktop.jpg"
        alt="image-header-desktop.jpg"
      />
      <div className={styles.heroOverlay} />
    </div>
  );
};
