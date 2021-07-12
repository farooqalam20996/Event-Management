import {Animated,Easing} from 'react-native';
const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
    const progress = Animated.add(
      current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      next
        ? next.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          })
        : 0
    );
    return {
      cardStyle: {
        transform: [
          {
            translateX: Animated.multiply(
              progress.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [
                  screen.width,
                  0,
                  screen.width * -0.3,
                ],
                extrapolate: 'clamp',
              }),
              inverted
            ),
          },
        ],
      },
    };
    // return {
    //   transitionSpec: {
    //     duration: 7500,
    //     easing: Easing.out(Easing.poly(0)),
    //     timing: Animated.timing,
    //     useNativeDriver: true,
    //   },
    //   screenInterpolator: sceneProps => {      
    //     const { layout, position, scene } = sceneProps
  
    //     const thisSceneIndex = scene.index
    //     const width = layout.initWidth
  
    //     const translateX = position.interpolate({
    //       inputRange: [thisSceneIndex - 1, thisSceneIndex],
    //       outputRange: [width, 0],
    //     })
  
    //     return { transform: [ { translateX } ] }
    //   },
    // }
  };
  export default forSlide;


  const transitionConfig = () => {
    
  }