import SkillElement from "components/skillElement";
import Section from 'components/Section'
import React, { useRef, useState } from "react";

function getRelativeCoordinates(
  event,
  referenceElement
) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.clientTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
  };
}

export default function SkillsList({ skills }) {
  const [mousePosition, setMousePosition] = useState({
    x: 240,
    y: 0,
  });
  const listRef = useRef(null);
  const handleMouseMove = e => {
    setMousePosition(getRelativeCoordinates(e, listRef.current));
  };

  return (
    <>
      {skills.map(skill => (
        <Section key={skill.name} heading={skill.name} headingAlignment="left">
          <SkillElement listRef={listRef} handleMouseMove={handleMouseMove} skill={skill} mousePosition={mousePosition} />
        </Section>
      ))}
    </>
  );
}
