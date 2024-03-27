import { StyleSheet } from "react-native";
import React from "react";
import {
  Box,
  Button,
  Card,
  Heading,
  Image,
  ScrollView,
  Text,
} from "@gluestack-ui/themed";
import { VStack } from "@gluestack-ui/themed";
import { useListings } from "../context/ListingsContext";
import ListingsCard from "../components/ListingsCard";

export default function Listings({ navigation }) {
  const { listings } = useListings();
  return (
    <Box style={styles.container}>
      {/* <Heading style={styles.heading}>My Listings</Heading> */}

      <ScrollView width={"100%"}>
        <VStack style={{ marginBottom: 0 }}>
          {listings?.map((p, index) => (
            <Box padding={0} style={styles.card} key={index}>
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
        </VStack>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 16,
  },
  heading: {
    fontSize: 32,
    padding: 16,
    fontWeight: 800,
  },
  card: {},
});
