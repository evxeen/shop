import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div>
      <h1>КОНТАКТЫ</h1>
      <div className={styles.content}>
        <div>
          <h3>
            Открытое акционерное общество <br /> "Речицкий метизный завод"
          </h3>
          <p>
            247500, Республика Беларусь,
            <br /> Гомельская обл., г. Речица,
            <br /> ул. Фрунзе, 2
          </p>
          <p>info@rmz.by</p>
          <p>8.00 -17.00 (обед с 12.00 до 13.00)</p>
          <p>
            Приемная: <br />
            + 375 (2340) 6-52-20 <br />
            Канцелярия: <br />+ 375 (2340) 6-52-60 (факс)
          </p>

          <h3>
            Унитарное Предприятие <br /> Торговый Дом "РМЗ"
          </h3>
          <p>
            Торговый отдел <br />
            +375 (2340) 9-60-24
            <br />
            +375 (2340) 6-12-75 (факс)
            <br /> E-mail: tdrmz2022@gmail.com
          </p>

          <p>
            Магазин Промтовары <br /> +375 (2340) 3-73-22
          </p>
        </div>
        <div>
          <h3>Управление Внешнеэкономических связей и сбыта</h3>
          <p>
            Республика Беларусь: <br />
            +375 (2340) 5-05-47 - Болты, гайки, заклёпки
            <br />
            +375 (2340) 5-05-48 - Гвозди <br />
            +375 (2340) 6-22-71 - Саморезы, винты, шурупы <br />
            +375 (44) 595-44-50 - Общий <br />
            +375 (2340) 5-06-87 - Розница
            <br />
            +375 (44) 595-47-84 - Розница <br />
            +375 (2340) 6-12-82 - Факс
          </p>
          <p>
            Услуги горячего цинкования: <br />
            +375 (2340) 6-22-73, 5-05-96 <br />
            +375 (2340) 6-22-73 (факс)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
