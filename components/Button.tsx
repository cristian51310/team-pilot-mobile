import { FontAwesome } from "@expo/vector-icons"
import React from "react"
import { Pressable, Text, View } from "react-native"
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated"

interface ButtonProps {
  onPress: () => void
  label?: string
  variant?: 'primary' | 'secondary' | "danger" | "black"
  size?: 'default' | 'small' | 'icon'
  icon?: React.ComponentProps<typeof FontAwesome>['name']
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export default function Button({
  onPress,
  label,
  variant = 'primary',
  size = 'default',
  icon,
}: ButtonProps) {

  const primaryColor = {
    backgroundColor: '#e9d5ff',
    borderColor: "#E4C6FF",
  }

  const secondaryColor = {
    backgroundColor: '#f3f4f6',
    borderColor: "#ebebeb",
  }

  const dangerColor = {
    backgroundColor: '#FEE2E2',
    borderColor: "#FECACA90",
  }

  const blackColor = {
    backgroundColor: '#000',
    borderColor: "#0202",
  }

  const colors = {
    primary: primaryColor,
    secondary: secondaryColor,
    danger: dangerColor,
    black: blackColor,
  }

  const animation = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => ({
    borderRadius: interpolate(animation.value, [0, 1], [12, 40])
  }))

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={() => (animation.value = withTiming(1, { duration: 200 }))}
      onPressOut={() => (animation.value = withTiming(0, { duration: 200 }))}
      style={[
        {
          width: size !== 'icon' ? "100%" : 'auto',
          borderWidth: 3,
          backgroundColor: colors[variant].backgroundColor,
          borderColor: colors[variant].borderColor,
          paddingHorizontal: 18,
          paddingVertical: 12,
        },
        animatedStyles
      ]}
    >
      <View className="flex flex-row justify-between">
        {size !== "icon" && label && (
          <Text
            className="text-lg font-semibold"
            style={{
              color: variant !== "black" ? "#000" : "#fff"
            }}
          >
            {label}
          </Text>
        )}
        {icon && (
          <FontAwesome
            name={icon}
            size={24}
          />
        )}
      </View>
    </AnimatedPressable>
  )
}
