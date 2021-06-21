import styles from '../../styles/stats-preview-card-component.module.css';
import { useSpring, animated } from 'react-spring';
export default function StatsPreviewComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <ReadSide />
        <ImageSide />
      </div>
    </div>
  );
}

const ReadSide = () => {
  return (
    <div className={styles.readSide}>
      <div className={styles.textBox}>
        <div>
          <h3>
            Get <span>insights</span> that help your business grow.
          </h3>
          <p>
            discover the benefits of data analytics and made better decisions
            regarding revenue,customer,experience,and overall efficiency
          </p>
        </div>
        <div className={styles.Canters}>
          <Canter amount={10} type={'companies'} value={'K+'} />
          <Canter amount={314} type={'Templates'} value={''} />
          <Canter amount={12} type={'Queries'} value={'M+'} />
        </div>
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
    <div className={styles.valueComponent}>
      <div className={styles.valueRow}>
        <animated.h3>{props.val.to((val) => Math.floor(val))}</animated.h3>
        <animated.h3 style={props}>{value}</animated.h3>
      </div>
      <animated.p style={props}>{type}</animated.p>
    </div>
  );
};

Canter.defaultProps = {
  amount: 'secondary',
  type: 'Button Text',
};

const ImageSide = () => {
  return <div className={styles.imageSide}></div>;
};
