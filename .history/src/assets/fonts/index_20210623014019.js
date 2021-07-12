import { useFonts } from "@use-expo/font";

export const fonts = () => {
    const [isloading] = useFonts({
        "Black":require('./Lato-Black.ttf'),
        "Bold":require('./Lato-Bold.ttf'),
        "Light":require('./Lato-Light.ttf'),
        "Regular":require('./Lato-Regular.ttf'),
        "Heavy":require('./Lato-Thin.ttf'),
    });
    return isloading;
}
