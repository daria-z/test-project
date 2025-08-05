import { RestaurantsPage } from "./pages/RestaurantsPage/RestaurantsPage";
import { restaurants } from "./fixtures";

export const App = () => {
  return <RestaurantsPage restaurants={restaurants} />
}
