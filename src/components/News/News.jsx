import React from "react";
import MarginWrapper from "../../layouts/MarginWrapper";
import styles from "./news.module.css";

export default function News({ postingan }) {
  console.log(postingan);
  return (
    <div className={styles.news}>
      <MarginWrapper>
        <h2>Berita Terkini</h2>
      </MarginWrapper>
      <MarginWrapper styles={styles.newWrapper}>
        {postingan.slice(1, 20).map(({ title, userId, id, body }) => (
          <div className={styles.card}>
            <h4>{title}</h4>
            <span>
              {userId} - {id}
            </span>
            <p>{body}</p>
            <button>Lihat</button>
          </div>
        ))}
      </MarginWrapper>
    </div>
  );
}
