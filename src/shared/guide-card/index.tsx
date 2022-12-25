import Image from "next/image";
import styles from "./index.module.css";

interface GuideCardProps {
  link: string;
  imageUri: string;
  imageAltText: string;
  textAlignment: "left" | "right";
  title: string;
  description: string;
}

const GuideCard = (props: GuideCardProps) => {
  return (
    <a className={styles.card} href={props.link}>
      <div className={styles.inner}>
        <div className={styles.image}>
          <Image
            src={props.imageUri}
            alt={props.imageAltText}
            width={306}
            height={223}
          />
        </div>
        <div className={`${styles.text} ${styles[props.textAlignment]}`}>
          <h3 className={styles.title}>
            {props.title}
          </h3>
          <p className={styles.description}>
            {props.description}
          </p>
        </div>
      </div>
    </a>
  );
};

export { GuideCard, GuideCard as default };
