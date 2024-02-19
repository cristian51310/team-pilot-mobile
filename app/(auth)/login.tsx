import { SafeAreaView, Text, View } from "@/components/Themed";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useCallback } from "react";
import { Button } from "react-native";

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
    <SafeAreaView
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <Text className="text-4xl font-bold">
        Iniciar Sesion
      </Text>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
    </SafeAreaView>
  );
}
export default SignInWithOAuth;