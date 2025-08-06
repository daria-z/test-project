import styles from "./styles.module.css"
import classnames from 'classnames';
import Product from '../Product/Product.jsx';

export const Menu = ({ products, className }) => {
  if (!products?.length) {
    return <div className={styles.menu}>В меню ничего нет</div>
  }
  return <div className={classnames(styles.menu, className)}>{products.map(item => <Product key={item.id} name={item.name} />)}</div>
}
