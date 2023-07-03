import React from 'react'
import LeftSection from './LeftSection/LeftSection'
import MiddleSection from './MiddleSection/MiddleSection'
import RightSection from './RightSection/RightSection'
import styles from './HomePage.module.css'

function HomePage() {
  return (
    <div className={styles.wrapper}>
      <LeftSection/>
      <MiddleSection/>
      <div className={styles.right}>
      <RightSection/>
      </div>
    </div>
  )
}

export default HomePage

