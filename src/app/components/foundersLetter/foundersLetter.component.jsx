'use client';
import Image from 'next/image';
import Founder from '../../../../public/images/founder.svg';
import Blur from '../../../../public/images/blur.svg';
import styles from './foundersletter.module.css';

export default function FoundersLetter() {

  return (
    <section className={styles.section}>
      <Image src={Blur} alt="" width={1600} height={900} className={styles.blurBackground} aria-hidden="true" />
      <Image src={Founder} alt="Founder's Letter" width={1300} height={600} className={styles.founderImage} />
      <div className={styles.letterContent}>
        <p className={styles.eyebrow}>Founder’s Note</p>
        <p className={styles.letterText}>We built Nnyocha out of a simple frustration: <br /> 
           Exceptional African researchers with real <br />
           solutions were being overlooked, not because <br /> 
           they lacked merit, but because the pathways to <br /> 
           funding were slow, fragmented, and unclear. <br /> 
           Nnyocha exists to fix that gap. 
        </p>
      </div>
    </section>
  );
}