import React, {  useEffect, useRef } from "react";
import styles from "../styles/scrollbar.module.scss";

const ScrollBar = (props) => {
  let ref = useRef();
  useEffect(() => {
    const el = ref.current;
    if (el) {
        const onWheel = e =>{
            e.preventDefault()
            el.scrollTo({
                left:el.scrollLeft + e.deltaY * 8,
                behavior:'smooth'
            })
        }
        el.addEventListener('wheel',onWheel)
        return ()=>el.removeEventListener('wheel',onWheel)
    }
  }, []);
  return (
    <div ref={ref} className={styles.items}>
      {React.Children.map(props.children, (child) =>
        React.Children.only(child)
      )}
    </div>
  );
};
export default ScrollBar;
