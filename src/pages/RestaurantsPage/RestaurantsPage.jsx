import { Layout } from "../../components/Layout"
import { Restaurant } from "../../components/Restaurant/Restaurant"
import { Tabs } from "../../components/Tabs"

import styles from "./styles.module.css"

export const RestaurantsPage = ({ restaurants }) => {
  console.log(restaurants)
  return (
    <Layout>
      <div className={styles.container}>
        <Tabs />
        {restaurants.map(item => <Restaurant key={item.id} restaurant={item} />)}
      </div>
    </Layout>
  )
}
