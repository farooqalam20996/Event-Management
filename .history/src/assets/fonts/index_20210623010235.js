import { useFonts } from "@use-expo/font";

const [isloading] = useFonts({
    "Regular":require('./assets/fonts/SFProDisplay-Regular.ttf'),
    "Semibold":require('./assets/fonts/SFProDisplay-Semibold.ttf'),
    "Bold":require('./assets/fonts/SFProDisplay-Bold.ttf'),
    "Heavy":require('./assets/fonts/SFProDisplay-Heavy.ttf'),
});

export const isloading;