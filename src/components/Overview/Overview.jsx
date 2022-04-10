import MarginWrapper from "../../layouts/MarginWrapper";
import styles from "./overview.module.css";

export default function Overview() {
  return (
    <div className={styles.wrapper}>
      <MarginWrapper styles={styles.overWrapper}>
        <h2 className={styles.tagline}>Berita Dunia dalam 1 Berita</h2>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, earum
          adipisci, dolorem voluptate porro animi ea magnam odio vel unde iusto
          eos ipsam harum explicabo. Expedita molestiae maiores doloribus,
          voluptates, rem doloremque ea sequi a qui reprehenderit minus adipisci
          nesciunt libero quam harum nisi deserunt? Tempora facere assumenda
          ullam consectetur?
        </p>
        <button>telusuri</button>
      </MarginWrapper>
    </div>
  );
}
