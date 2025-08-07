import styles from "./styles.module.css"
import { Menu } from "../Menu/Menu"
import { Review } from "../Review/Review"

export const Restaurant = ({ restaurant }) => {
  console.log(restaurant.menu)
  return (<div className={styles.container}>
    <div>{restaurant.name}</div>
    {restaurant.menu && <Menu products={restaurant.menu} className={styles.menu}/>}
    <div>
      {restaurant.reviews.map(item => <Review review={item} key={item.key} />)}
    </div>
  </div>)
}

