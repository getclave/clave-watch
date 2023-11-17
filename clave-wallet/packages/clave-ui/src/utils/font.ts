import {
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
  useFonts,
} from "@expo-google-fonts/dm-sans";

export const useDmSans = (): boolean => {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
    DMSans_700Bold_Italic,
  });

  return fontsLoaded;
};

export enum DMSans {
  "regular" = "DMSans_400Regular",
  "regularItalic" = "DMSans_400Regular_Italic",
  "medium" = "DMSans_500Medium",
  "mediumItalic" = "DMSans_500Medium_Italic",
  "bold" = "DMSans_700Bold",
  "boldItalic" = "DMSans_700Bold_Italic",
}
