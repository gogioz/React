import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CountryList(cities, isLoading) {
  const citiesArr = cities.cities;
  const isLoadingStr = isLoading.isLoading;
  if (isLoadingStr) return <Spinner />;
  if (!citiesArr.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  // const countriesArr = cities.cities;
  const countries = citiesArr.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country, i) => (
        <CountryItem country={country} key={i} />
      ))}
    </ul>
  );
}

export default CountryList;
