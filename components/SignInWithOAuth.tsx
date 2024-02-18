import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import { useCallback } from "react";
import { Button } from "react-native";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import { View, Text } from "./Themed";
import { Link } from "expo-router";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_github" });

  const onPress = useCallback(async () => {
    try {
      const {
        createdSessionId,
        signIn,
        signUp,
        setActive
      } = await startOAuthFlow();

      if (createdSessionId) {
        setActive && setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
        console.log("Sign in or sign up");
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View className="flex-1 justify-center items-center gap-5">
      <Button
        title="Sign in with Github"
        onPress={onPress}
      />
      <Link href="/" asChild>
        <Text className="text-sm underline text-blue-500">
          Sign in with email
        </Text>
      </Link>
    </View>
  );
}
export default SignInWithOAuth;