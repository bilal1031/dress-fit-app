import React from "react";
import { SliderBox } from "react-native-image-slider-box";
export default function AdSlider({ images, onPress }) {
  return (
    <SliderBox
      images={images}
      sliderBoxHeight={200}
      onCurrentImagePressed={onPress}
      dotColor="black"
      inactiveDotColor="#90A4AE"
      paginationBoxVerticalPadding={20}
      autoplay
      circleLoop
      resizeMethod={"resize"}
      resizeMode={"cover"}
      paginationBoxStyle={{
        position: "absolute",
        bottom: 0,
        padding: 0,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        paddingVertical: 10,
      }}
      dotStyle={{
        width: 5,
        height: 5,
        borderRadius: 2.5,
        marginHorizontal: 0,
        padding: 0,
        margin: 0,
        backgroundColor: "black",
      }}
      ImageComponentStyle={{
        borderRadius: 15,
        width: "97%",
        marginTop: 5,
      }}
      imageLoadingColor="black"
    />
  );
}
