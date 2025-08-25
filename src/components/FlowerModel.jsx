import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function FlowerModel(props) {
  const group = useRef();

  // Load scene and animations
  const { scene, animations } = useGLTF('/flower.glb');

  // Drei's animation hook
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    // Play first animation clip if available
    if (animations.length > 0 && actions) {
      const firstClip = animations[0].name;
      actions[firstClip]?.play();
    }
  }, [actions, animations]);

  return <primitive ref={group} object={scene} {...props} />;
}

useGLTF.preload('/flower.glb');
