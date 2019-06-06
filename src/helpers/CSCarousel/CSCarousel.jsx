import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

import './CSCarousel.css';

export const onExiting = () => {
  this.animating = true;
};

export const onExited = () => {
  this.animating = false;
};

export default class CSCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  handleNext = () => {
    const { activeIndex } = this.state;
    const { children } = this.props;

    if (this.animating) {return;}
    const nextIndex = activeIndex === children.length - 1 ? 0 : activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  handlePrevious = () => {
    const { activeIndex } = this.state;
    const { children } = this.props;

    if (this.animating) {return;}
    const nextIndex = activeIndex === 0 ? children.length - 1 : activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = newIndex => {
    if (this.animating) {return;}
    this.setState({ activeIndex: newIndex });
  }

  render = () => {
    const { activeIndex } = this.state;
    const { children } = this.props;

    return(
      <div className="CSCarousel">
        <Carousel
          activeIndex={activeIndex}
          next={this.handleNext}
          previous={this.handlePrevious}
        >
          <CarouselIndicators items={children} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {children}
          <CarouselControl id="cscrousel-prev" direction="prev" directionText="Previous" onClickHandler={this.handlePrevious} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.handleNext} />
        </Carousel>
      </div>
    );
  }
}

CSCarousel.propTypes = {
  children: PropTypes.array.isRequired,
};
