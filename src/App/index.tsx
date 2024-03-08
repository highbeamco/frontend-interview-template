import styles from "./App.module.scss";
import HighbeamLogo from "./highbeam-logo.svg?react";

const App = () => {
  return (
    <div className={styles.container}>
      <HighbeamLogo height={512} width={512} />
    </div>
  );
};

export default App;
