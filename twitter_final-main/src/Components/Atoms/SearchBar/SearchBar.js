import { BsSearch } from "react-icons/bs";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <>
      <span className={styles.icon}>
        <BsSearch className={styles.icon2} />

        <input
          className={styles.searchInput}
          type="text"
          placeholder=" Search Twitter"
        />
      </span>
    </>
  );
}
