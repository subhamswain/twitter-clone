import styles from "./Trends.module.css";
import { FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";


export default function Trends() {

  const content = [
    {
      id: 1,

      inIntrseted: false,
      upText: "ECONOMY",
      midText: "#INDIA'S GDP",
      botText: "485k Tweets",
    },
    
    {
      id: 2,
      inIntrseted: false,
      upText: "SPORTS",
      midText: "#CRICKET",
      botText: "455k Tweets",
    },
   
    {
      id: 3,

      inIntrseted: false,
      upText: "CODING",
      midText: "#REACT",
      botText: "401k Tweets",
    },
    {
      id: 4,

      inIntrseted: false,
      upText: "TRENDING",
      midText: "#PRIDE MONTH",
      botText: "391k Tweets",
    },
    {
      id: 5,

      inIntrseted: false,
      upText: "TRENDING",
      midText: "#RAMAYANA",
      botText: "383k Tweets",
    },
    
  ];

  const [list, setList] = useState(content);
  const [showMore,setShowMore ] = useState(false)
  const [x,setX ] = useState(2)

  function notInterested(element) {
    console.log(element);
    // list.splice(index , 1)
    // setList([...list])
    if (element.inIntrseted === true) {
      element.inIntrseted = false;
      setList([...list]);
    } else {
      element.inIntrseted = true;
      setList([...list]);
    }
  }

  function dataDelete(element) {
    let index = list.indexOf(element);
    console.log(index);
    list.splice(index, 1);
    setList([...list]);
  }

  function handleShowMoreItem() {
    
    if(x === 2){
      setX(list.length)
    }else{
      setX(2)
    }
    if(!showMore){
        setShowMore(true)
    }else{
        setShowMore(false)
    }
  }

  return (
    <>
      <div className={styles.box}>
        <h3 style={{paddingLeft:"1rem"}}>What's Happening </h3>

        {list.slice(0,x).map((element) => (
          <div key={element.id} className={styles.contentmain}>
            <div className={styles.content}>
              <span className={styles.upText}>{element.upText}</span>
              <span className={styles.content1}>{element.midText}</span>
              <span className={styles.upText}>{element.botText}</span>
            </div>
            <span className={styles.poperParent}>
              {element.inIntrseted ? (
                <span className={styles.poper}>
                  <h4 onClick={() => dataDelete(element)}>NOT INTRESTED</h4>
                  <h4 onClick={() => dataDelete(element)}>
                    SPAM OR MISLEADING
                  </h4>
                </span>
              ) : (
                " "
              )}
              <FiMoreHorizontal onClick={() => notInterested(element)} />
            </span>
          </div>
        ))}

        <h4 onClick={handleShowMoreItem} className={styles.ShowMore}>{showMore ? "Show Less" :"Show More" }</h4>
      </div>
    </>
  );
}
