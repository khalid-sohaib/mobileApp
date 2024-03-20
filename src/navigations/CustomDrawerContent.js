import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer';

export default function CustomDrawerContent({ navigation, logout })  {
    return (
      <View style={styles.container}>
        <DrawerContentScrollView>
          {/* Your custom drawer content */}
          <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.drawerItemText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate("About")}>
            <Text style={styles.drawerItemText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate("Scan")}>
            <Text style={styles.drawerItemText}>Scan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerItem} onPress={logout}>
            <Text style={styles.drawerItemText}>Logout</Text>
          </TouchableOpacity>
        </DrawerContentScrollView>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F56E13",
    },
    drawerItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#fff",
    },
    drawerItemText: {
      color: "#fff",
      fontSize: 18,
    },
  });
  