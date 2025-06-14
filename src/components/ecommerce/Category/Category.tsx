import styles from "./styles.module.css";
const { categoryImg, categoryTitle } = styles;

const Category = () => {
  return (
    <div >
      <div className={categoryImg}>
        <img
          src="/public/images/santhosh-kumar-RqYTuWkTdEs-unsplash.jpg"
          alt="Category"
        />
      </div>
      <h4 className={categoryTitle}>Category Name</h4>
    </div>
  );
};

export default Category;
