import styles from "./CountryItem.module.css";

function CountryItem(country) {
  return (
    <li className={styles.countryItem}>
      <span>{country.country.emoji}</span>
      <span>{country.country.country}</span>
    </li>
  );
}

export default CountryItem;
