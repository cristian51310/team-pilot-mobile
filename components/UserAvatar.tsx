import { useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Image } from "react-native";
import { View } from "./Themed";

export default function UserAvatar() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) return null;

  return (
    <Link href="/profile">
      <View>
        <Image
          source={{ uri: user.imageUrl }}
          className="rounded-full size-10 ml-3 mt-1"
        />
      </View>
    </Link>
  )
}
