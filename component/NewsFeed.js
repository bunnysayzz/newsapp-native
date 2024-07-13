import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import news from "../api/getNews";
import Card from "./Card";
import LottieView from "lottie-react-native";

const NewsFeed = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, onRefresh] = useState(false);

  const getResult = async () => {
    setLoading(true);
    const res = await news.getNews();
    setData(res.data.articles);
    setLoading(false);
  };

  useEffect(() => {
    getResult();
  }, []);

  return (
    <View style={styles.container}>
      {!loading ? (
        <View>
          <Text style={styles.text}>Top Headlines - India </Text>
          <FlatList
            onRefresh={() => getResult()}
            refreshing={refresh}
            data={data}
            keyExtractor={(news) => news.publishedAt + news.title}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subtitle={item.description}
                image={item.urlToImage}
                onPress={() => navigation.navigate("Info", item)}
              />
            )}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <LottieView
            loop
            autoPlay
            source={require("../animations/96231-loading-orange-animation.json")}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default NewsFeed;