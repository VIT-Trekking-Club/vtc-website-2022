import { motion } from "framer-motion";
import { mountainLayer } from "../../animations/variants";
import Mountain from "../../assets/Mountain.png";

function MountainLayer() {
  return (
    <div className="layer mountain-layer-container center">
      <div
        style={{
          width: "100%",
        }}
      >
        <motion.img
          initial="initial"
          animate="animate"
          variants={mountainLayer}
          transition={{
            type: "tween",
            duration: 2,
            ease: "linear",
            delay: 1,
          }}
          src={Mountain}
          alt="mountain"
          width="100%"
        />
      </div>
    </div>
  );
}

export default MountainLayer;
