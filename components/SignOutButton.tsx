import { useAuth } from "@clerk/clerk-expo";
import { Button } from "react-native";
import { View } from "./Themed";

export const SignOut = () => {
  const { isLoaded, signOut } = useAuth();

  if (!isLoaded) return null;

  return (
    <View>
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};