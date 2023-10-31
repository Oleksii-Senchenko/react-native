// import { launchImageLibraryAsync } from "expo-image-picker";
// import { AntDesign } from "@expo/vector-icons";

// import { useState } from "react";
// import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

// const ImagePicker = () => {
//   const [avatar, setAvatar] = useState(null);

//   const addPhoto = async () => {
//     const result = await launchImageLibraryAsync();

//     if (result.assets) {
//       setAvatar(result.assets[0].uri);
//     }
//   };
//   const deletePhoto = () => {
//     setAvatar(null);
//   };

//   let content = null;

//   if (avatar) {
//     content = (
//       <View style={styles.imageContainer}>
//         <Image source={{ uri: avatar }} style={styles.avatarImage} />
//         <TouchableOpacity onPress={deletePhoto} style={styles.IconContainer}>
//           <AntDesign
//             name="closecircleo"
//             color="black"
//             style={styles.closeIcon}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   } else {
//     content = (
//       <View style={styles.grayBackground}>
//         <TouchableOpacity onPress={addPhoto} style={styles.IconContainer}>
//           <AntDesign name="pluscircleo" color="black" style={styles.addIcon} />
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   return <View>{content}</View>;
// };

// export default ImagePicker;

// const styles = StyleSheet.create({
//   avatarImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 16,
//   },
//   imageContainer: {
//     borderRadius: 16,
//     resizeMode: "cover",
//   },

//   grayBackground: {
//     width: 120,
//     height: 120,
//     backgroundColor: "#F6F6F6",
//     borderRadius: 16,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   IconContainer: {
//     position: "absolute",
//     bottom: 12,
//     right: -12,
//   },
//   addIcon: {
//     fontSize: 24,
//     color: "orange",
//   },
//   closeIcon: {
//     fontSize: 24,
//     color: "#BDBDBD",
//   },
// });
