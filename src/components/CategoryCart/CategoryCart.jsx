import styles from "./CategoryCart.module.scss";
const CategoryCart = ({ e }) => {
  return (
    <div className={styles.categoryCart}>
      <img src="/assets/images/categoryImage.png" alt="image" />
      <span>{e}</span>
    </div>
  );
};
export default CategoryCart;
