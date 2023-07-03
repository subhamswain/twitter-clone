import React from 'react'
import styles from './RightSection.module.css'
import Footer from '../../../Atoms/Footer/Footer'
import SearchBar from '../../../Atoms/SearchBar/SearchBar'
import Trends from './Trends/Trends'
import Follow from './Follows/Follow'

function RightSection() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.main}>
        <SearchBar/>
    <div className={styles.follow}>
      <Trends/>
      <Follow/>
      <Footer/>
    </div>
    </div>
    </div>
  )
}

export default RightSection
