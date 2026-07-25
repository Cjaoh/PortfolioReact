import { useEffect, useRef } from "react";
import * as THREE from "three";
import "../styles/introLoader.css";

const CANVAS_SIZE = 500;
const TUBE_LENGTH = 30;
const TUBE_RADIUS = 5.6;
const ROTATE_VALUE = 0.035;
const BACKGROUND_COLOR = 0xd1684e;

class LoaderCurve extends THREE.Curve {
  getPoint(percent) {
    const pi2 = Math.PI * 2;
    const x = TUBE_LENGTH * Math.sin(pi2 * percent);
    const y = TUBE_RADIUS * Math.cos(pi2 * 3 * percent);

    let t = (percent % 0.25) / 0.25;
    t = percent % 0.25 - (2 * (1 - t) * t * -0.0185 + t * t * 0.25);

    if (Math.floor(percent / 0.25) === 0 || Math.floor(percent / 0.25) === 2) {
      t *= -1;
    }

    const z = TUBE_RADIUS * Math.sin(pi2 * 2 * (percent - t));
    return new THREE.Vector3(x, y, z);
  }
}

const easing = (time, start, change, duration) => {
  let nextTime = time / (duration / 2);

  if (nextTime < 1) {
    return (change / 2) * nextTime * nextTime + start;
  }

  nextTime -= 2;
  return (change / 2) * (nextTime * nextTime * nextTime + 2) + start;
};

const disposeMesh = (object) => {
  if (object.geometry) {
    object.geometry.dispose();
  }

  if (object.material) {
    object.material.dispose();
  }
};

const IntroLoader = ({ duration = 5000, onFinish }) => {
  const wrapRef = useRef(null);

  useEffect(() => {
    const finishTimer = window.setTimeout(() => {
      onFinish?.();
    }, duration);

    return () => {
      window.clearTimeout(finishTimer);
    };
  }, [duration, onFinish]);

  useEffect(() => {
    if (!wrapRef.current) {
      return undefined;
    }

    let acceleration = 0;
    let animationStep = 0;
    let shouldOpen = false;
    let animationFrame = 0;

    const group = new THREE.Group();
    const camera = new THREE.PerspectiveCamera(65, 1, 1, 10000);
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    camera.position.z = 150;
    scene.add(group);

    const tubeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      opacity: 1,
      transparent: true,
    });
    const mesh = new THREE.Mesh(
      new THREE.TubeGeometry(new LoaderCurve(), 200, 1.1, 2, true),
      tubeMaterial
    );
    group.add(mesh);

    const coverMaterial = new THREE.MeshBasicMaterial({
      color: BACKGROUND_COLOR,
      opacity: 0,
      transparent: true,
    });
    const ringCover = new THREE.Mesh(new THREE.PlaneGeometry(50, 15, 1), coverMaterial);
    ringCover.position.x = TUBE_LENGTH + 1;
    ringCover.rotation.y = Math.PI / 2;
    group.add(ringCover);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      opacity: 0,
      transparent: true,
    });
    const ring = new THREE.Mesh(new THREE.RingGeometry(4.3, 5.55, 32), ringMaterial);
    ring.position.x = TUBE_LENGTH + 1.1;
    ring.rotation.y = Math.PI / 2;
    group.add(ring);

    for (let index = 0; index < 10; index += 1) {
      const shadow = new THREE.Mesh(
        new THREE.PlaneGeometry(TUBE_LENGTH * 2 + 1, TUBE_RADIUS * 3, 1),
        new THREE.MeshBasicMaterial({
          color: BACKGROUND_COLOR,
          opacity: 0.13,
          transparent: true,
        })
      );
      shadow.position.z = -2.5 + index * 0.5;
      group.add(shadow);
    }

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(CANVAS_SIZE, CANVAS_SIZE);
    renderer.setClearColor(BACKGROUND_COLOR);
    wrapRef.current.appendChild(renderer.domElement);

    const start = () => {
      shouldOpen = true;
    };

    const back = () => {
      shouldOpen = false;
    };

    const render = () => {
      let progress;

      animationStep = Math.max(
        0,
        Math.min(240, shouldOpen ? animationStep + 1 : animationStep - 4)
      );
      acceleration = easing(animationStep, 0, 1, 240);

      if (acceleration > 0.35) {
        progress = (acceleration - 0.35) / 0.65;
        group.rotation.y = (-Math.PI / 2) * progress;
        group.position.z = 50 * progress;

        progress = Math.max(0, (acceleration - 0.97) / 0.03);
        mesh.material.opacity = 1 - progress;
        ringCover.material.opacity = progress;
        ring.material.opacity = progress;
        ring.scale.x = 0.9 + 0.1 * progress;
        ring.scale.y = 0.9 + 0.1 * progress;
      }

      renderer.render(scene, camera);
    };

    const animate = () => {
      mesh.rotation.x += ROTATE_VALUE + acceleration;
      render();
      animationFrame = window.requestAnimationFrame(animate);
    };

    document.body.addEventListener("mousedown", start);
    document.body.addEventListener("touchstart", start);
    document.body.addEventListener("mouseup", back);
    document.body.addEventListener("touchend", back);
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      document.body.removeEventListener("mousedown", start);
      document.body.removeEventListener("touchstart", start);
      document.body.removeEventListener("mouseup", back);
      document.body.removeEventListener("touchend", back);

      group.traverse(disposeMesh);
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <section className="intro-loader" aria-label="Chargement du portfolio">
      <div className="intro-loader__wrap" ref={wrapRef} />
      <p className="intro-loader__text">Loading ...</p>
    </section>
  );
};

export default IntroLoader;
