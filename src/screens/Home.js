import { View, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, ImageBackground, VStack } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import MyDrawer from "../navigations/MyDrawer";
import MyTabs from "../navigations/Mytabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { HStack } from "@gluestack-ui/themed";
import { Card } from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";
import { ScrollView } from "@gluestack-ui/themed";
import ProductCard from "../components/ProductCard";
import { StatusBar } from "react-native";
import { Text } from "@gluestack-ui/themed";
import FilterTab from "../components/filter/FilterTab";
import CustomCard from "../components/CustomCard";
import { useQuery } from "react-query";
import { useFilter } from "../context/FilterContext";
import LottieView from "lottie-react-native";

export default function Home() {
  const [products, setProducts] = useState([]);
  const fetchCategories = async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    if (!res.ok) {
      throw new Error("Failed to fetch product categories");
    }
    return res.json();
  };
  const { data: categories, isloading: categoriesLoading } = useQuery(
    "categories",
    fetchCategories
  );

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error("Failed to fetch product categories");
      }

      const data = await res.json();
      console.warn(data);
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };
  const { filter } = useFilter();

  const { data: ApiProducts, isLoading: productsLoading } = useQuery(
    "products",
    fetchProducts
  );

  
  useEffect(() => {
    setProducts(ApiProducts);

  }, [ApiProducts, filter]);

  const filteredProducts =
  products?.filter((p) => p.category == filter) || [];
  const imgPath = "../assests/bg2.jpg";
  const items = ["Clothing", "Cameras", "Electronics", "Books"];
  const productsArr = [
    {
      category: "Fashion Clothing",
      title: "Cotton Kurta",
      price: "$12",
      image:
        'https://images.unsplash.com/photo-1595231712325-9fedecef7575?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"',
    },
    {
      category: "Fashion Clothing",
      title: "Cotton Kurta",
      price: "$12",
      image:
        'https://images.unsplash.com/photo-1595231712325-9fedecef7575?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"',
    },
    ,
    {
      category: "Fashion Clothing",
      title: "Cotton Kurta",
      price: "$12",
      image:
        'https://images.unsplash.com/photo-1595231712325-9fedecef7575?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"',
    },
    {
      category: "Fashion Clothing",
      title: "Cotton Kurta",
      price: "$12",
      image:
        'https://images.unsplash.com/photo-1595231712325-9fedecef7575?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"',
    },
  ];

  return (
    // <ImageBackground source={require(imgPath)} resizeMode="cover" style={[styles.image, styles.main]}>
    <Box style={[styles.image, styles.main]}>
      <ScrollView>
        <HStack>
          <FilterTab items={categories || items} />
        </HStack>
        {productsLoading && (
        <LottieView
          source={require('.././assests/loading-animation.json')} 
          autoPlay
          loop
        />
      )}

        <VStack style={{ marginBottom: 80 }}>
        
          {products?.map((p, index) => (
            <ProductCard
              key={index}
              imgUrl={p.image}
              title={p.title}
              category={p.category}
              price={p.price}
            />
          ))}

          <HStack
            space="lg"
            mb={"$3"}
            style={{ justifyContent: "space-around", alignItems: "center" }}
          >
            <ScrollView w="$90" horizontal>
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
            </ScrollView>
          </HStack>
          <Box
            style={{
              backgroundColor: "#FB5159",
              borderRadius: 20,
              justifyContent: "space-around",
              alignItems: "center",
              padding: 20,
            }}
          >
            <Icon name="check-circle" size={60} color="green" />
          </Box>
        </VStack>
      </ScrollView>
    </Box>
    //   </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#F3F0F1",
    flex: 1,
    //   justifyContent:'flex-start',
    padding: 12,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //   alignItems:'center',
  },
  heading: {
    textAlign: "center",
    paddingVertical: 20,
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },
});
