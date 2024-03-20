import { Platform } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, VStack } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { HStack } from "@gluestack-ui/themed";
import { ScrollView } from "@gluestack-ui/themed";
import ProductCard from "../components/ProductCard";
import { StatusBar } from "react-native";
import FilterTab from "../components/filter/FilterTab";
import CustomCard from "../components/CustomCard";
import { useQuery } from "react-query";
import { useFilter } from "../context/FilterContext";
import { Progress } from "@gluestack-ui/themed";
import { ProgressFilledTrack } from "@gluestack-ui/themed";
import Home from '../screens/Home';

export default function HomeContainer() {

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
        // console.warn(data);
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
      filter === "all"
        ? products
        : products?.filter((p) => p.category === filter) || [];
  
    const imgPath = "../assests/bg2.jpg";
    // const items = ["All", "Clothing", "Cameras", "Electronics", "Books"];
    const items = categories;


  console.warn("Filtered Productysss......", filteredProducts);
  console.warn(" Productysss......", products);

  return (
    <>
          {productsLoading ? (
        <Box style={styles.loadingContainer}>
          <Progress value={75} w={"100%"} size="lg" color={"#F45962"}>
            <ProgressFilledTrack bg="#F45962" />
          </Progress>
        </Box>
      ) : (
        <Home products filteredProducts items/>
      )}
    </>
  )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      },
})