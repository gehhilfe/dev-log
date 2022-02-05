import React, { useEffect, useRef, useState } from "react";

import { animated, useSpring } from "react-spring";

import Heart from '../images/heart.svg';
import HeartSpark from '../images/heart-spark.svg';
import useOnScreen from "./on-screen";
import { getLikes, postLike } from "../services/like";
import { clientId } from "../services/client";


const LikeButton = ({slug}) => {

  const [count, setCount] = useState(0);
  const [wasDisplayed, setDisplayed] = useState(false);
  const [isHover, setHover] = useState(false);
  const [isMouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    async function f() {
      const count = await getLikes(slug.trim().replace('/', ''))
      setCount(count)
      if (count == 0) {
        setDisplayed(true)
      }
    }
    f()
  }, [])

  const props = useSpring({
      transform: isHover && !isMouseDown ? 'scale(1.2)' : 'scale(1)',
      //opacity: isHover && !isMouseDown ? 0.8 : 1,
      config: {
        bounce: 40,
        tension: 250
      }
  })

  const propsSpark = useSpring({
    transform: isHover && !isMouseDown ? 'scale(1)' : 'scale(0)',
    config: {
      bounce: 0,
      tension: 250
    }
  })

  const ref = useRef();
  const onScreen = useOnScreen(ref, '-30px');

  const { number } = useSpring({
    from: {number: 0},
    config: {
      duration: wasDisplayed ? 0 : 2000,
    },
    onRest: () => setDisplayed(true),
    number: onScreen ? count : 0,
  })

  const clicked = () => {
    async function f() {
      const resp = await postLike(slug.trim().replace('/', ''), clientId())
      setCount(Math.max(count, resp))
    }
    f()
  }

  return (
    <div className="like-button-container" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onMouseDown={() => setMouseDown(true)} onMouseUp={() => setMouseDown(false)} onClick={() => clicked()}>
      <animated.div ref={ref} className="like-button-counter">{number.to(n => n.toFixed(0))}</animated.div>
      <animated.img style={propsSpark} className="like-button-spark" src={HeartSpark} />
      <animated.img style={props} className="like-button-heart" src={Heart} />
    </div>
  )
}

export default LikeButton