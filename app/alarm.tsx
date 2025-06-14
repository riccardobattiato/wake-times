import * as React from "react";
import { View } from "react-native";

import { Text } from "~/components/ui/text";
export default function Screen() {
  return (
    <View className="flex-1 justify-center items-center gap-5 p-6 bg-secondary/30">
      <Text>Alarm is ringing!</Text>
    </View>
  );
}
