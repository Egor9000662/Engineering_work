import React from "react";
import styles from "../../styles/info.module.scss";
import stepOne from "../../images/step_one.png";
import iconsBlog from "../../images/icons/step_one_icons.png";

function Info() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h3>Мы работаем в комплексе</h3>
        <p>
          чтобы Вы не тратили время на поиск и организацию
        </p>
        <p> множества подрядчиков</p>
      </div>
      <div className={styles.step_one}>
      <div className={styles.img}></div>
        <div className={styles.info_step_one}>
            <div className={styles.info_box}>
          <div className={styles.title}>
            <div className={styles.logo}>шаг №1.</div>
            <span>Подготовительные работы</span>
          </div>
          <div className={styles.text}>
            Мы осматриваем здание, делаем замеры и проверяем  наличие визуально
            заметных дефектов: трещин, коррозии, повреждения фундамента и т.д.
          </div>
          <div className={styles.blog}>
            <img src={iconsBlog} alt="icons" />
            <div>
            <span>
              “Задача этого этапа получить максимально полное представление о
              конструкции здания, условиях его  эксплуатации и возможных слабых
              местах“
            </span>
            <p>Алексей, обследователь и главный инженер проектов</p>
            </div>
          </div>
         
        </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
