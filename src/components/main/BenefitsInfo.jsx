import React from "react";
import styles from "../../styles/benefitsInfo.module.scss";
import tv from "../../images/tv_benefits_main.png";
import marker from '../../images/icons/icon_main_list_benefits.svg'

function BenefitsInfo() {
  return (
    <div className={styles.benefits_info}>
      <div className={styles.container}>
        <div className={styles.pluses}>
          <div className={styles.title}>
        <h2>Мы работаем быстро</h2>
        <h2>и наши отчеты проходят</h2>
        <h2>согласование с первого раза</h2>
        </div>
          <p>
            Над вашим объектом работает целая команда: <br /> 3 ГИПа (главных инженеров
            проектов) с опытом работы <br /> от 6 лет и 2 штатных сотрудника для
            камеральных работ
          </p>
          <img src={tv} alt="tv" />
        </div>

        <div className={styles.list_benefits}>
         
          <ul>
            <li> <h3>Вы и Ваши архитекторы получаете:</h3></li>
            <li><img src={marker} alt="marker" /><span>Отчет на который на 100% можно положиться </span></li>
            <li><img src={marker} alt="marker" /><span>Экономию времени и прогнозируемость сроков </span></li>
            <li><img src={marker} alt="marker" /><span>Предварительные результаты сразу на месте </span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BenefitsInfo;
