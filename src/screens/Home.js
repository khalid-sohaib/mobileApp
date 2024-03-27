import { Platform } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, Heading, VStack } from "@gluestack-ui/themed";
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
import Colors from "../theme/Colors";
import ListingsCard from "../components/ListingsCard";
import { useListings } from "../context/ListingsContext";
import { NativeBaseConfigProvider } from "native-base/lib/typescript/core/NativeBaseContext";

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const { listings } = useListings();
  // const listings =  [ {"category": "", "description": "Iftar deal with the basic process and specific operation of the position", "imgUrl": "file:///data/user/0/com.firstapp/cache/rn_image_picker_lib_temp_791701f7-5e22-4acf-ac79-5894e04e1c39.jpg", "location": "31.483996, 74.3945499", "price": "252", "title": "Aftari"},
  //                       {"category": "Construction", "description": " injected humour, or non-characteristic words ", "imgUrl": "file:///data/user/0/com.firstapp/cache/rn_image_picker_lib_temp_c1dcde83-6869-4e1d-81a9-b07fffa21a15.jpg", "location": "", "price": "858", "title": "Lorem Ipsum"},
  //                       {"category": "", "description": "Dddd 580wattss bhchcggg hhghhhh ggtyyy gyydggtt", "imgUrl": "file:///data/user/0/com.firstapp/cache/rn_image_picker_lib_temp_695d680c-58f1-48d9-ba63-62064484b577.jpg", "location": "", "price": "8586", "title": "Solar panels"},
  //                       {"category": "", "description": " injected humour, or non-characteristic words ", "imgUrl": "file:///data/user/0/com.firstapp/cache/rn_image_picker_lib_temp_c1dcde83-6869-4e1d-81a9-b07fffa21a15.jpg", "location": "", "price": "858", "title": "Lorem Ipsum"},];
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
  const itemsArr = ["All", "Clothing", "Cameras", "Electronics", "Books"];
  const items = categories;

  return (
    // <ImageBackground source={require(imgPath)} resizeMode="cover" style={[styles.image, styles.main]}>
    <>
      {productsLoading ? (
        <Box style={styles.loadingContainer}>
          <Progress value={75} w={"100%"} size="lg" color={Colors.primary}>
            <ProgressFilledTrack bg={Colors.primary} />
          </Progress>
        </Box>
      ) : (
        products && (
          <Box style={[styles.image, styles.main]}>
            <HStack>
              <FilterTab items={items || itemsArr} />
            </HStack>
            <ScrollView>
              <VStack style={{ marginBottom: 80 }}>
                {filteredProducts?.map((p, index) => (
                  <ProductCard
                    key={index}
                    imgUrl={p.image}
                    title={p.title}
                    category={p.category}
                    price={p.price}
                    description={p.description}
                  />
                ))}

                <Heading color={Colors.gray}>My Listings</Heading>
                <ScrollView w="$100" horizontal mb="$3">
                  {listings?.map((p, index) => (
                    <Box mr={8} key={index}>
                      <ListingsCard
                        title={p.title}
                        price={p.price}
                        imgUrl={p.imgUrl}
                        description={p.description}
                        category={p.category}
                        navigation={navigation}
                      />
                    </Box>
                  ))}
                </ScrollView>
              </VStack>
            </ScrollView>
          </Box>
        )
      )}
    </>
    //   </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.background,
    flex: 1,
    //   justifyContent:'flex-start',
    padding: 12,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //   alignItems:'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
