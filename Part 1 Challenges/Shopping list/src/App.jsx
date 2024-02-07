import React, { useEffect } from "react";
// { useState }
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
// import { faCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { useTranslation, initReactI18next } from "react-i18next";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icon-css/css/flag-icons.min.css";
import i18next from "i18next";
import cookies from "js-cookie";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fr", "ar"],
    fallbackLng: "en",
    detection: {
      order: ["htmlTag", "cookie", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
    // dir: "llr",
  },
  {
    code: "ar",
    name: "العربية",
    country_code: "eg",
    dir: "rtl",
  },
];

export default function App() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  // console.log(currentLanguageCode);
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  console.log(currentLanguage);
  const { t } = useTranslation();
  const releaseDate = new Date("2021-03-07");
  const timeDifference = new Date() - releaseDate;
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);
  return (
    <div className="container d-flex justify-content-between mt-5">
      <div className="d-flex flex-column align-items-start">
        <h1 className="font-weight-normal mb-3">{t("welcome_message")}</h1>
        <p>{t("days_since_release", { number_of_days })}</p>
      </div>
      <div className="language-select">
        <div className="d-flex justify-content-end align-items-center language-select-root">
          <div className="dropdown">
            <button
              className="btn btn-secondary  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Languages
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <span className="dropdown-item-text">{t("language")}</span>
              </li>
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <button
                    className="dropdown-item"
                    onClick={() => i18next.changeLanguage(code)}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                    ></span>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function App() {
//   const [input, setInput] = useState("");
//   const [items, setItems] = useState([]);
//   const [total, setTotal] = useState(0);

//   const addItem = function () {
//     const newItem = {
//       itemName: input,
//       itemQnt: 1,
//       isSelected: false,
//     };
//     createNewItem(newItem);
//   };

//   const createNewItem = function (data) {
//     items.push(data);
//     setInput("");
//     totalQnt();
//   };

//   const increaseQnt = function (index) {
//     const findItem = [...items];
//     findItem[index].itemQnt++;
//     totalQnt();
//     setItems(findItem);
//   };

//   const decreaseQnt = function (index) {
//     const findItem = [...items];
//     if (findItem[index].itemQnt === 1) {
//       findItem[index].itemQnt = 1;
//     } else {
//       findItem[index].itemQnt--;
//       totalQnt();
//       setItems(findItem);
//     }
//   };

//   const totalQnt = function () {
//     const sum = items.reduce((total, item) => {
//       return total + item.itemQnt;
//     }, 0);
//     setTotal(sum);
//   };

//   const toggelHandeler = function (index) {
//     const findItem = [...items];
//     findItem[index].isSelected = !findItem[index].isSelected;
//     if (findItem[index].isSelected) {
//       findItem[index].itemQnt = 0;

//       findItem[index].isSelected = true;
//       setItems(findItem);
//       totalQnt();
//     } else {
//       findItem[index].itemQnt = 1;
//       findItem[index].isSelected = false;
//       setItems(findItem);
//       totalQnt();
//     }
//   };

//   return (
//     <div className="main-container">
//       <div className="shopping-list">
//         <div className="input">
//           <input
//             type="text"
//             placeholder="Add an item..."
//             name="itemName"
//             id="itemName"
//             onChange={(e) => setInput(e.target.value)}
//             value={input}
//           />
//           <button className="addBtn" onClick={() => addItem()}>
//             +
//           </button>
//         </div>

//         <ul className="list">
//           {items.map((item, index) => (
//             <div key={index}>
//               <li>
//                 <div
//                   className="container"
//                   onClick={() => toggelHandeler(index)}
//                 >
//                   {item.isSelected ? (
//                     <>
//                       <FontAwesomeIcon icon={faCheckCircle} className="icon" />
//                       <span className="completed">{item.itemName}</span>
//                     </>
//                   ) : (
//                     <>
//                       <FontAwesomeIcon icon={faCircle} className="icon" />
//                       <span>{item.itemName}</span>
//                     </>
//                   )}
//                 </div>
//                 <div className="handel-item">
//                   <button
//                     className="handel-icon"
//                     onClick={() => decreaseQnt(index)}
//                   >
//                     -
//                   </button>
//                   <p>{item.itemQnt}</p>
//                   <button
//                     className="handel-icon"
//                     onClick={() => increaseQnt(index)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </li>
//               <hr></hr>
//             </div>
//           ))}
//         </ul>
//       </div>
//       <p className="total"> Total: {total}</p>
//     </div>
//   );
// }
