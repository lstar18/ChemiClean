// /* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable max-len */
// import React, { useState } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption,
// }
//   from 'reactstrap';

// import PropTypes from 'prop-types';

// class CarouselForHome extends React.Component {
//   CarouselpropTypes = {
//     the current active slide of the carousel
//     activeIndex: PropTypes.number,
//     a function which should advance the carousel to the next slide (via activeIndex)
//     next: PropTypes.func.isRequired,
//     a function which should advance the carousel to the previous slide (via activeIndex)
//     previous: PropTypes.func.isRequired,
//     controls if the left and right arrow keys should control the carousel
//     keyboard: PropTypes.bool,
//     /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
//      * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
//      */
//     pause: PropTypes.oneOf(['hover', false]),
//     Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
//     This is how bootstrap defines it... I would prefer a bool named autoplay or something...
//     ride: PropTypes.oneOf(['carousel']),
//     the interval at which the carousel automatically cycles (default: 5000)
//     If set to false, carousel will not Autoplay (i.e. will not automatically cycle).
//     interval: PropTypes.oneOfType([
//       PropTypes.number,
//       PropTypes.string,
//       PropTypes.bool,
//     ]),
//     children: PropTypes.array,
//     called when the mouse enters the Carousel
//     mouseEnter: PropTypes.func,
//     called when the mouse exits the Carousel
//     mouseLeave: PropTypes.func,
//     controls whether the slide animation on the Carousel works or not
//     slide: PropTypes.bool,
//     cssModule: PropTypes.object,
//     controls whether the touch gestures on the Carousel works or not (default: true)
//     enableTouch: PropTypes.bool,
//   };

//   CarouselItempropTypes = {
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//     in: PropTypes.bool,
//     cssModule: PropTypes.object,
//     children: PropTypes.node,
//     slide: PropTypes.bool,
//   };

//   CarouselIndicatorspropTypes = {
//     items: PropTypes.array.isRequired,
//     activeIndex: PropTypes.number.isRequired,
//     cssModule: PropTypes.object,
//     onClickHandler: PropTypes.func.isRequired,
//   };

//   CarouselControlpropTypes = {
//     direction: PropTypes.oneOf(['prev', 'next']).isRequired,
//     onClickHandler: PropTypes.func.isRequired,
//     cssModule: PropTypes.object,
//     directionText: PropTypes.string,
//   };

//   CarouselCaptionpropTypes = {
//     captionHeader: PropTypes.node,
//     captionText: PropTypes.node.isRequired,
//     cssModule: PropTypes.object,
//   };

//  items = [
//    {
//      src: 'https://cdn.shopify.com/s/files/1/0206/7122/products/ED01LND32B_1024x1024.jpg?v=1530383352',
//      alt: 'CommonGood',//      caption: '',

//    },
//    {
//      src: 'https://cdn.shopify.com/s/files/1/1034/7599/products/single_3in1BubbleBath_front_600x1024_bfb55fcf-324a-44e3-8c06-2121938017d5_1024x1024.png?v=1526304696',
//      altText: '3in1 BubbleBath',
//      caption: '',
//    },
//    {
//      src: 'https://d3t32hsnjxo7q6.cloudfront.net/i/3b47186d60809c0d87483f5a70a7c135_ra,w380,h380_pa,w380,h380.jpeg',
//      altText: 'Mrs. Meyer\'s Countertop Spray',
//      caption: '',
//    },
//  ];

//  render() {
//    const buildCarousel = (items) => {
//      ShowCarousel = (props) => {
//        const [activeIndex, setActiveIndex] = useState(0);
//        const [animating, setAnimating] = useState(false);
//        const next = () => {
//          if (animating) return;
//          const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//          setActiveIndex(nextIndex);
//        };

//        const previous = () => {
//          if (animating) return;
//          const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//          setActiveIndex(nextIndex);
//        };

//        const goToIndex = (newIndex) => {
//          if (animating) return;
//          setActiveIndex(newIndex);
//        };

//        const slides = items.map((item) => (
//          <CarouselItem
//            onExiting={() => setAnimating(true)}
//            onExited={() => setAnimating(false)}
//            key={item.src}
//          >
//            <img src={item.src} alt={item.altText} />
//            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
//          </CarouselItem>
//        ));
//        return (
//     <Carousel
//      activeIndex={activeIndex}
//      next={next}
//      previous={previous}
//    >
//      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
//      {slides}
//      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
//      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
//    </Carousel>
//        );
//      };
//    };
//    return (
//     <div>
//       {buildCarousel()}
//     </div>
//    );
//  }
// }
// eslint-disable-next-line import/no-anonymous-default-export
// export default CarouselForHome;
