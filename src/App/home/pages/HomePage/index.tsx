import HomeHighlightCard from "../../components/HomeHighlightCard";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <HomeHighlightCard />
      </div>
    </div>
  );
};

export default HomePage;
