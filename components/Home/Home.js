// import React from "react";
// import { View, Text, Image, StyleSheet } from "react-native";
// import { useRoute } from "@react-navigation/native";
// import { Feather, AntDesign, Entypo } from "@expo/vector-icons";
// import { TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// const Home = () => {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { avatar, name, login } = route.params;

//   return (
//     <View style={styles.container}>
//       <View>
//         <View style={styles.headerContainer}>
//           <Text style={styles.welcomeText}> Публікації</Text>
//           <Feather name="log-out" size={24} color="grey" />
//         </View>
//         <View style={styles.line} />
//         <View style={styles.contentContainer}>
//           <Image source={{ uri: avatar }} style={styles.photo} />
//           <View style={styles.dataText}>
//             <Text style={styles.emailText}>{name}</Text>
//             <Text>{login}</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.footer}>
//         <View style={styles.line} />
//         <View style={styles.iconFooterContainer}>
//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate("PostsScreen");
//             }}
//           >
//             <AntDesign name="appstore-o" size={24} color="black" />
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.addBtn}
//             onPress={() => {
//               navigation.navigate("ProfileScreen");
//             }}
//           >
//             <Entypo name="plus" size={24} color="black" />
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate("CreatePostsScreen");
//             }}
//           >
//             <AntDesign name="user" size={24} color="black" />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//     paddingTop: 44,
//     justifyContent: "space-between",
//   },
//   headerContainer: {
//     justifyContent: "center",
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 16,
//     marginBottom: 11,
//   },
//   welcomeText: {
//     color: "#212121",
//     fontWeight: "500",
//     paddingHorizontal: 49,
//     marginRight: 50,
//     marginLeft: 90,
//     textAlign: "center",
//   },
//   line: {
//     borderBottomWidth: 1,
//     borderBottomColor: "black",
//     width: "100%",
//     marginBottom: 32,
//   },
//   contentContainer: {
//     flexDirection: "row",
//     paddingHorizontal: 8,
//     alignItems: "left",
//   },
//   photo: {
//     width: 60,
//     height: 60,
//     borderRadius: 16,
//   },
//   dataText: {
//     textAlign: "center",
//     padding: 8,
//     justifyContent: "center",
//   },
//   emailText: {
//     fontSize: 13,
//     color: "#212121",
//   },
//   footer: {
//     marginBottom: 34,
//   },
//   iconFooterContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "row",
//     gap: 74,
//   },
//   addBtn: {
//     width: 60,
//     height: 60,
//     backgroundColor: "orange",
//     borderRadius: 25,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default Home;

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Feather, AntDesign, Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { avatar, name, login } = route.params;

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>Публікації</Text>
          <Feather name="log-out" size={24} color="grey" />
        </View>
        <View style={styles.line} />
        <View style={styles.contentContainer}>
          <Image source={{ uri: avatar }} style={styles.photo} />
          <View style={styles.dataText}>
            <Text style={styles.emailText}>{name}</Text>
            <Text>{login}</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.line} />
        <View style={styles.iconFooterContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PostsScreen");
            }}
          >
            <AntDesign name="appstore-o" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => {
              navigation.navigate("ProfileScreen");
            }}
          >
            <Entypo name="plus" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CreatePostsScreen");
            }}
          >
            <AntDesign name="user" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
    justifyContent: "space-between",
  },
  headerContainer: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 11,
  },
  welcomeText: {
    color: "#212121",
    fontWeight: "500",
    textAlign: "center",
    flex: 1,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: "100%",
    marginBottom: 32,
  },
  contentContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
    alignItems: "left",
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  dataText: {
    textAlign: "center",
    padding: 8,
    justifyContent: "center",
  },
  emailText: {
    fontSize: 13,
    color: "#212121",
  },
  footer: {
    marginBottom: 34,
  },
  iconFooterContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 74,
  },
  addBtn: {
    width: 60,
    height: 60,
    backgroundColor: "orange",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;

