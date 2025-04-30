import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { RestaurantsProps } from "../restaurants";
import { RestaurantItemVertical } from '../item'

export function RestaurantVerticalList() {
    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);

    useEffect(() => {
        async function getRestaurants() {
        const response = await fetch("http://192.168.100.104:3000/restaurants");
        const data = await response.json();
        setRestaurants(data);
        }

        getRestaurants();
    }, []);

    return (
        <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
            {restaurants.map( item => (
                <RestaurantItemVertical item={item} key={item.id}/>
            ))}
        </View>
    );
}
