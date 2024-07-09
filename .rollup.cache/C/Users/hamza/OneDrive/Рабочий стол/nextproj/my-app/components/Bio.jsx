import styles from '@styles/global.module.css';
const Bio = ({ bio }) => {
  return (
    <div className={styles.top__content}>
      <div className={styles.content_container}>
        <div className={styles.subtitle1}>
          <h2>Bio</h2>
        </div>
        <div className={styles.subpar1}>
          <p>{bio.description}</p>
        </div>
      </div>
    </div>
  );
};
export default Bio;
//# sourceMappingURL=Bio.jsx.map
