import styles from "./Footer.module.scss";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Bottom = () => {
  const currentDate = moment().format("YYYY-MM-DD");
  const currentTime = moment().format("HH:mma");

  return (
    <div className={styles.wrapper}>
      <div className="row">
        <div className="col-md-3">
          <p className={styles.title}>about you!</p>
          <p className={styles.subtitle}>
            Enthusiastic, hardworking <br /> and self-motivated front-end
            developer
          </p>
        </div>
        <div className="col-md-3">
          <p className={styles.title}>dynamic part</p>
          <p className={styles.subtitle}>Current date: {currentDate}</p>
          <p className={styles.subtitle}>Current time: {currentTime}</p>
        </div>
        <div className="col-md-3">
          <p className={styles.title}>contact</p>
          <p className={styles.subtitle}>
            wiktorydzewski@gmail.com <br />
            +48665124242
          </p>
        </div>
        <div className="col-md-3">
          <div className={styles.iconsWrapper}>
            <div className={styles.instagram}>
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </div>
            <div className={styles.twitter}>
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </div>
            <div className={styles.facebook}>
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
