// BeeModel.jsx - FIXED VERSION
import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

const BeeModel = forwardRef((props, ref) => {
  const group = useRef();
  const { scene, animations } = useGLTF("/demon_bee_full_texture.glb");
  const { actions, mixer } = useAnimations(animations, group);

  // Forward the internal ref to the parent component
  useImperativeHandle(ref, () => group.current, []);

  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.play();
    }

    // Set initial position similar to vanilla version
    if (group.current) {
      group.current.position.set(2.8, -1, 0);
      group.current.rotation.set(0, 1.5, 0);
      group.current.scale.set(1.3, 1.3, 1.3);
    }
  }, [actions, animations]);

  // Update mixer every frame
  useFrame((_, delta) => {
    if (mixer) mixer.update(delta);
  });

  return <primitive ref={group} object={scene} {...props} />;
});

BeeModel.displayName = "BeeModel";

useGLTF.preload("/demon_bee_full_texture.glb");

export default BeeModel;
