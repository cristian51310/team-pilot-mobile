import { FontAwesome } from "@expo/vector-icons"
import React from "react"
import { Pressable, Text, View } from "react-native"

interface ButtonProps {
  onPress: () => void
  label?: string
  variant?: 'primary' | 'secondary'
  size?: 'default' | 'small' | 'icon'
  icon?: React.ComponentProps<typeof FontAwesome>['name']
}

export default function Button({
  onPress,
  label,
  variant = 'primary',
  size = 'default',
  icon,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: size !== 'icon' ? "100%" : 'auto',
        borderWidth: size !== "default" ? 3 : 5,
        backgroundColor: '#e9d5ff',
        borderColor: "#E4C6FF",
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 16,
      }}
    >
      <View className="flex flex-row justify-between">
        {label && (
          <Text className="text-lg font-semibold" >
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
    </Pressable>
  )
}