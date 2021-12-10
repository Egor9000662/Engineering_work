import React from "react";
import ScrollBar from "../scrollBar";
import styles from "../../styles/slider.module.scss";
import slide_1 from "../../images/slides/slider_1.png";
import slide_2 from "../../images/slides/slider_2.png";
import slide_3 from "../../images/slides/slider_3.png";
import arrow from "../../images/icons/arrow_main_slide_item.svg";

function BenefitsInfo() {
  const item = [
    {
      img: slide_1,
      title: "Общее обследование",
      text: " Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности и т.д",
    },
    {
      img: slide_2,
      title: "Тепловизионная съемка",
      text: "Исследование системы отопления, вентиляции и кондиционирования, а также оценка энергоэффективности здания",
    },
    {
      img: slide_3,
      title: "Телеинспекция инженерных сетей",
      text: " Цветная телевизионная съемка внутренней поверхности любых протяженных объектов до 250 метров",
    },
    {
      img: slide_1,
      title: "Общее обследование",
      text: " Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности и т.д",
    },
    {
      img: slide_2,
      title: "Тепловизионная съемка",
      text: "Исследование системы отопления, вентиляции и кондиционирования, а также оценка энергоэффективности здания",
    },
    {
      img: slide_3,
      title: "Телеинспекция инженерных сетей",
      text: " Цветная телевизионная съемка внутренней поверхности любых протяженных объектов до 250 метров",
    },
    {
      img: slide_1,
      title: "Общее обследование",
      text: " Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности и т.д",
    },
    {
      img: slide_2,
      title: "Тепловизионная съемка",
      text: "Исследование системы отопления, вентиляции и кондиционирования, а также оценка энергоэффективности здания",
    },
    {
      img: slide_3,
      title: "Телеинспекция инженерных сетей",
      text: " Цветная телевизионная съемка внутренней поверхности любых протяженных объектов до 250 метров",
    },
    {
      img: slide_1,
      title: "Общее обследование",
      text: " Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности и т.д",
    },
    {
      img: slide_2,
      title: "Тепловизионная съемка",
      text: "Исследование системы отопления, вентиляции и кондиционирования, а также оценка энергоэффективности здания",
    },
    {
      img: slide_3,
      title: "Телеинспекция инженерных сетей",
      text: " Цветная телевизионная съемка внутренней поверхности любых протяженных объектов до 250 метров",
    },

  ];
  return (
    <div className={styles.slider}>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>Услуги</p>
          <h2>
            Выполняем как комплексное обследование, так и отдельные виды работ
          </h2>
        </div>
        <div className={styles.scroll_box}>
          <ScrollBar>
            {item.map((item, index) => {
              return (
                <div className={styles.item} key={index}>
                  <img src={item.img} alt="slide" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className={styles.link}>
                    <a href="#">Подробнее</a>
                    <div className={styles.arrow}>
                    <img src={arrow} alt="arrow" />
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollBar>
        </div>
      </div>
    </div>
  );
}

export default BenefitsInfo;


