import { launchImageLibraryAsync } from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const ImagePicker = () => {
  const [avatar, setAvatar] = useState(null);

  const addPhoto = async () => {
    const result = await launchImageLibraryAsync();
    if (result.assets) {
      setAvatar(result.uri);
    }
  };

  return (
    <ImageBackground source={{ uri: avatar }} style={styles.avatarImage}>
      {avatar ? (
        <View  >
          <Image source={{ uri: avatar }} style={styles.avatarImage} />
          <AntDesign name="close" size={24} color="black" style={styles.closeIcon} />
        </View>
      ) : (
        <TouchableOpacity onPress={addPhoto}>
          <View style={styles.grayBackground}>
            <AntDesign name="plus" size={48} color="black" />
          </View>
        </TouchableOpacity>
      )}
    </ImageBackground>
  );
};
//   return (
//     <TouchableOpacity onPress={addPhoto}>
//       {avatar ? (
//         <Image source={{ uri: avatar }} style={styles.avatarImage} />
//       ) : (
//         <View style={styles.grayBackground}>
//           <AntDesign name="plus" size={48} color="black" />
//         </View>
//       )}
//     </TouchableOpacity>
//   );
// };

export default ImagePicker;

const styles = StyleSheet.create({
  addAvatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  avatarImage: {
    borderRadius: 16,
  },
  closeIcon:{
    position:'absolute',
  },
  grayBackground: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});



