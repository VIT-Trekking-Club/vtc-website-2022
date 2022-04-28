import Background from "../../assets/Background.svg";
import { motion } from "framer-motion";
import { backgroundLayer as backgroundLayerVariants } from "../../animations/variants";

function BackgroundLayer() {
  return (
    <div className="layer background-layer-container">
      <motion.img
        variants={backgroundLayerVariants}
        initial="initial"
        animate="animate"
        transition={{
          type: "tween",
          duration: 2,
          ease: "easeOut",
          delay: 1,
        }}
        className="background-layer"
        src={Background}
      />
    </div>
  );
}

export default BackgroundLayer;
