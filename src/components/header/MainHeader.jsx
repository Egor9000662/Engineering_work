import React from "react";
import styles from "../../styles/mainHeader.module.scss";
import button from "../../images/icons/btn_header_main_info_button.svg";
import benfits_one from '../../images/headermain_benefits_one.svg'
import benfits_two from '../../images/headermain_benefits_two.svg'
import benfits_three from '../../images/headermain_benefits_three.svg'
import benefits_video from '../../images/video_benefits.svg'


function MainHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.info_lozung}>
          <h1>Независимое обследование зданий и сооружений</h1>
          <p>
            антенн, труб, теплосетей, канализаций и других объектов
            строительства
          </p>
        </div>
        <div className={styles.info_offer}>
          <div className={styles.button}>
            <img src={button} alt="button" />
            <p>получить коммерческое</p>
          </div>
          <p className={styles.text}>
            Отправьте техзадание и получите коммерческое предложение в течении
            15 минут на свой email или в мессенджер
          </p>
        </div>
      </div>
      <div className={styles.benefits}>
        <div className={styles.benefits_item}>
          <div className={styles.item}>
            <img src={benfits_one} alt="benefits"/>
            <p>Начинаем работать без аванса</p>
          </div>
          <div className={styles.item}>
            <img src={benfits_two} alt="benefits"/>
            <p>Предоставляем  отсрочку платежа</p>
          </div>
          <div className={styles.item}>
            <img src={benfits_three} alt="benefits"/>
            <p>Всегда называем справедливую цену</p>
          </div>
        </div>
        <div className={styles.benefits_video}>
          <img src={benefits_video} alt="benefits" />
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
