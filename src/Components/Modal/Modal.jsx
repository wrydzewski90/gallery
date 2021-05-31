import styles from "./Modal.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ onClose, data }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const getPreviousImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  const getNextImage = () => {
    if (currentImage < 9) {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.title}>gallery in modal</p>
        <p>picsum.photos</p>
        <button className={styles.buttonClose} onClick={onClose}>
          <div className={styles.closeIcon}>
            <FontAwesomeIcon icon={["fa", "times"]} />
          </div>
        </button>
      </div>
      <div className={styles.content}>
        <img
          src={data[currentImage].download_url}
          className={styles.galleryImage}
        />
        <div className={styles.author}>{data[currentImage].author}</div>
        <button className={styles.buttonPrev} onClick={getPreviousImage}>
          <div className={styles.angleLeft}>
            <FontAwesomeIcon icon={["fa", "angle-left"]} />
          </div>
        </button>
        <button className={styles.buttonNext} onClick={getNextImage}>
          <div className={styles.angleRight}>
            <FontAwesomeIcon icon={["fa", "angle-right"]} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Modal;
