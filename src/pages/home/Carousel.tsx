import {ICarousel} from '@/models/home';
import {hp, viewWidth, wp} from '@/utils/index';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import SnapCarousel, {
  ParallaxImage,
  AdditionalParallaxProps,
  Pagination,
} from 'react-native-snap-carousel';

const sliderWidth = viewWidth;
const itemWith = wp(96);
const imgHeight = hp(26);

interface Iprops {
  data: ICarousel[];
}

class Carousel extends React.Component<Iprops> {
  state = {
    activeIndex: 0,
  };

  onSnapToItem = (index: number) => {
    this.setState({
      activeIndex: index,
    });
  };

  renderItem = (
    {item}: {item: ICarousel},
    parallaxProps?: AdditionalParallaxProps,
  ) => {
    return (
      <ParallaxImage
        source={{uri: item.image}}
        style={styles.image}
        containerStyle={styles.imageContainer}
        parallaxFactor={0.8}
        {...parallaxProps}
      />
    );
  };

  get pagination() {
    const {data} = this.props;
    return (
      <View style={styles.paginationWraper}>
        <Pagination
          activeDotIndex={this.state.activeIndex}
          dotContainerStyle={styles.dotContainerStyle}
          dotsLength={data.length}
          containerStyle={styles.paginationContainer}
          dotStyle={styles.dot}
          inactiveDotScale={0.6}
          inactiveDotOpacity={0.4}
        />
      </View>
    );
  }

  render() {
    const {data} = this.props;
    return (
      <View>
        <SnapCarousel
          data={data}
          renderItem={this.renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWith}
          onSnapToItem={this.onSnapToItem}
          hasParallaxImages
          loop></SnapCarousel>
        {this.pagination}
      </View>
    );
  }
}

export default Carousel;

const styles = StyleSheet.create({
  imageContainer: {
    width: itemWith,
    height: imgHeight,
    borderRadius: 5,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  paginationWraper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    top: -25,
    paddingHorizontal: 4,
    paddingVertical: 6,
    borderRadius: 3,
  },
  dotContainerStyle: {
    marginHorizontal: 10,
  },
  dot: {
    width: 8,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.92)',
  },
});
