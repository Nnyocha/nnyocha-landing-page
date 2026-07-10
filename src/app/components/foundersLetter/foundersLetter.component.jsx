'use client';
import Image from 'next/image';
import Founder from '../../../../public/images/founder.svg';
import styles from './foundersletter.module.css';

export default function FoundersLetter() {

  return (
    <section className={styles.section}>
      <Image src={Founder} alt="Founder's Letter" width={1300} height={600} className={styles.founderImage} />
    </section>
  );
}