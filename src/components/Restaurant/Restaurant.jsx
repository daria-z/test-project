import styles from "./styles.module.css"
import { Menu } from "../Menu/Menu"

export const Restaurant = ({ restaurant }) => {
  console.log(restaurant.menu)
  return (<div className={styles.container}>
    <div>{restaurant.name}</div>
    <Menu products={restaurant.menu}/>
    <div>Reviews</div>
  </div>)
}
