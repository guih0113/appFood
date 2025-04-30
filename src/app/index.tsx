import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";
import Constants from 'expo-constants'
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from "../components/list";

const heightStatusBar = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: heightStatusBar + 8 }}>
        <Header/>
        <Banner/>
        <Search/>
      </View>

      <Section
        name="Comidas em alta"
        label="Veja mais"
        size="text-2xl"
        action={() => console.log("Clique no veja mais")}
      />
      <TrendingFoods/>

      <Section
        name="Famosos no Ifood"
        label="Veja todos"
        size="text-xl"
        action={() => console.log("Clique no famosos")}
      />
      <Restaurants/>

      <Section
        name="Restaurantes"
        label="Veja todos"
        size="text-xl"
        action={() => console.log("Clique no restaurantes")}
      />
      <RestaurantVerticalList/>
      
    </ScrollView>
  );
}
