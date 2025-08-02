import { Layout } from "../../components/Layout"
import { Restaurant } from "../../components/Restaurant/Restaurant"
import { Tabs } from "../../components/Tabs"

import styles from "./styles.module.css"

export const RestaurantsPage = () => (
  <Layout>
      <div className={styles.container}>
        <Tabs />
        <Restaurant />
      </div>
    </Layout>
)
