import styles from "./Main.module.scss";
import hexagon from "../../hexagon.svg";
import cx from "classnames";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Main = () => {
  const [images, setImages] = useState([]);
  const firstText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro delectus fugiat ex ab eveniet! Voluptas commodi quas quae at, hic dignissimos reiciendis pariatur non autem cum, voluptatibus esse fugit deserunt quia. Omnis atque nesciunt ullam eligendi placeat veritatis, sint recusandae, odio voluptas suscipit qui. Iusto at debitis perspiciatis explicabo. Explicabo doloribus labore quia officia ipsa voluptas hic mollitia rerum deleniti, neque commodi magnam officiis quaerat? Nihil iusto dolore sit saepe quis mollitia quam unde dolor quos rem obcaecati repellat hic nobis reiciendis officia, quae et corporis similique nostrum, in laboriosam eos vitae. Maiores id excepturi doloremque ipsa architecto veniam facere.";

  const secondText =
    "Lorem ipsum dolor sit, amet, consecteur adipiscing elitLorem ipsum dolor sit, amet, consecteur adipiscing elit";

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);

    if (!isModalVisible) {
      fetchImages();
    }
  };
  const [isReadMoreVisible, setIsReadMoreVisible] = useState(false);
  const toggleReadMoreVisibility = () => {
    setIsReadMoreVisible(!isReadMoreVisible);
  };

  const primaryButton = cx({
    [styles.defaultButton]: true,
    [styles.primaryButton]: true,
  });

  const actionButton = cx({
    [styles.defaultButton]: true,
    [styles.actionButton]: true,
  });

  const fetchImages = () => {
    fetch("https://picsum.photos/v2/list?limit=10")
      .then((response) => response.json())
      .then((data) => setImages(data));
  };

  return (
    <div className={styles.wrapper}>
      {isModalVisible && images.length > 0 && (
        <Modal onClose={toggleModalVisibility} data={images} />
      )}
      <div className={styles.left}>
        <img className={styles.hexagonImage} alt="Hexagon" src={hexagon} />
      </div>

      <div className={styles.right}>
        <p className={styles.title}>this is main page title.</p>
        <p className={styles.subtitle}>
          {isReadMoreVisible ? firstText : secondText}
        </p>

        <button onClick={toggleReadMoreVisibility} className={primaryButton}>
          more
        </button>
        <button className={actionButton} onClick={toggleModalVisibility}>
          show gallery
        </button>
      </div>
    </div>
  );
};

export default Main;
