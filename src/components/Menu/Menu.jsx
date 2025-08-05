import styles from "./styles.module.css"

export const Menu = ({ products }) => {
  if (!products?.length) {
    return <div className={styles.menu}>В меню ничего нет</div>
  }
  return <div className={styles.menu}>{products.map(item => <span key={item.id}>{item.name}</span>)}</div>
}
