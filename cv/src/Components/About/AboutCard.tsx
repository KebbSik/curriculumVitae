import { motion } from "framer-motion";

interface Props {
  isReversed?: boolean;
  image?: string;
  content: string;
}

// const text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
//             ratione et in similique harum ab! Expedita beatae ipsa natus odit
//             fugit ut, harum tempora? Ex ipsum praesentium quisquam non commodi
//             cupiditate consequuntur voluptatibus blanditiis aspernatur modi
//             corrupti, incidunt recusandae optio?`;

const wrapper = {
  hidden: { opacity: 1, color: "#ffffff" },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.02 },
  },
};
const letters = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { ease: "backInOut", duration: 0.4 },
  },
};

const AboutCard = ({ isReversed, image, content }: Props) => {
  return (
    <div className="about_card">
      <div
        className={
          isReversed ? "about_container card_reverse" : "about_container"
        }
      >
        <div className="card_left">
          <motion.img
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragElastic={0.05}
            dragTransition={{
              bounceStiffness: 200,
              bounceDamping: 7,
            }}
            whileTap={{ cursor: "grabbing" }}
            src={image ? image : "https://placehold.co/600x400"}
          />
        </div>
        <motion.div
          variants={wrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="card_right"
        >
          {content.split("").map((char, index) => (
            <motion.text key={index} variants={letters}>
              {char}
            </motion.text>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutCard;
