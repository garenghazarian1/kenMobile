import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <>
      <Stack
        screenOptions={{ headerShown: false }}
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: "white",
        //   },
        //   headerTintColor: "black",
        //   headerTitleStyle: {
        //     // fontWeight: "bold",
        //   },
        // }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="contact" />
      </Stack>
    </>
  );
}
