import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '@storybook/react/demo';

import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

import FadeTransition from '../src/transitions/FadeTransition';
import FlipTransition from '../src/transitions/FlipTransition';
import ExpandTransition from '../src/transitions/ExpandTransition';
import ScaleTransition from '../src/transitions/ScaleTransition';
import SlideTransition from '../src/transitions/SlideTransition';
import SlideAndFadeTransition from '../src/transitions/SlideAndFadeTransition';
import RotateTransition from '../src/transitions/RotateTransition';

import '../src/index.css';

const Image = ({ src }) =>
  <img
    style={{
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      borderWidth: '1px',
      borderColor: 'black',
      marginRight: '0.5rem',
    }}
    src={src}
  />;

const Doge = () =>
  <Image src="http://i1.kym-cdn.com/entries/icons/facebook/000/013/564/aP2dv.jpg" />;

const Kat = () =>
  <Image src="https://s-media-cache-ak0.pinimg.com/736x/bc/ec/7d/bcec7dac3022d86950e0d771b2bb3f96.jpg" />;

class TransitionGroupContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { active: true };
  }

  render() {
    const range = [...new Array(5)];

    return (
      <div>
        <Button onClick={() => this.setState({ active: !this.state.active })}>
          Toggle Animation
        </Button>
        <TransitionGroup>
          {this.state.active &&
            range.map((_, i) =>
              React.cloneElement(this.props.children, {
                key: `item-${i}`,
              }),
            )}
        </TransitionGroup>
      </div>
    );
  }
}

storiesOf('Transitions', module)
  .add('Fade', () =>
    <TransitionGroupContainer>
      <FadeTransition>
        <Kat />
      </FadeTransition>
    </TransitionGroupContainer>,
  )
  .add('Flip', () =>
    <TransitionGroupContainer>
      <FlipTransition>
        <Doge />
      </FlipTransition>
    </TransitionGroupContainer>,
  )
  .add('Scale', () =>
    <TransitionGroupContainer>
      <ScaleTransition>
        <Kat />
      </ScaleTransition>
    </TransitionGroupContainer>,
  )
  .add('Expand', () =>
    <TransitionGroupContainer>
      <ExpandTransition>
        <Doge />
      </ExpandTransition>
    </TransitionGroupContainer>,
  )
  .add('Rotate', () =>
    <TransitionGroupContainer>
      <RotateTransition>
        <Kat />
      </RotateTransition>
    </TransitionGroupContainer>,
  )
  .add('Slide', () =>
    <TransitionGroupContainer>
      <SlideTransition>
        <Doge />
      </SlideTransition>
    </TransitionGroupContainer>,
  )
  .add('Slide and Fade', () =>
    <TransitionGroupContainer>
      <SlideAndFadeTransition>
        <Kat />
      </SlideAndFadeTransition>
    </TransitionGroupContainer>,
  );