import { Box } from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed";
import { ScrollView } from "@gluestack-ui/themed";
import React, {  useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { useFilter } from "../../context/FilterContext";

export default function FilterTab({ items }) {
  const [focusedIndex, setFocusedIndex] = useState(null);
  const {filter, setFilter }= useFilter();


  const handlePress = (index, e) => {
    setFocusedIndex(index);
    setFilter(items[index]);
  };
  
  return (
    <ScrollView horizontal marginVertical={8} >
      {items.map((e, index) => (
         <TouchableWithoutFeedback
         key={index}
         onPress={() => handlePress(index)}
       >
        <Box
          key={index}
          style={{ 
            borderRadius: 50, 
            backgroundColor: focusedIndex === index ? "#46C6BE" : "#fff",
            marginLeft: 8,
            
           }}
        >
          <Text
            fontSize="$md"
            fontStyle="normal"
            fontFamily="$heading"
            fontWeight="$normal"
            lineHeight="$sm"
            style={{ color: "black", paddingHorizontal: 12, padding: 8 }}
          >
            {e}
          </Text>
        </Box>
        </TouchableWithoutFeedback>
      ))}
    </ScrollView>
  );
}
