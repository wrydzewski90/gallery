import styles from "./App.module.scss";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "../FontAwesome";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainWrapper}>
        <Main />
      </div>
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
