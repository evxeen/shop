import styles from "./Catalog.module.scss";

import CategoryCart from "../../components/CategoryCart/CategoryCart.jsx";
import { useEffect, useState } from "react";
import Papa from "papaparse";

const Catalog = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch("/data.csv")
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const data = result.data;
            let res = [];
            data.map((element) => {
              if (element["Категория"] !== "") {
                console.log(element);
                res.push(element["Категория"]);
              }
            });

            setCategories(res);
          },
        });
      });
  }, []);

  return (
    <div className={styles.catalog}>
      <h1>КАТАЛОГ</h1>
      <div className={styles.content}>
        {categories?.map((item, index) => (
          <CategoryCart key={index} e={item} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
