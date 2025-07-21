import { abilities } from "../constants";
import TitleHeader from "../components/TitleHeader";
import { motion } from "framer-motion";
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Features = () => (
  <div id="features" className="w-full padding-x-lg mt-16">
    <TitleHeader title="Features" sub="⚡ Our Highlights" />

    <div className="mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {abilities.map(({ imgPath, title, desc }, index) => (
        <motion.div
          key={title}
          className="card-border rounded-xl p-8 flex flex-col gap-4 bg-white/5 backdrop-blur-md"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={index}
        >
          <div className="size-14 flex items-center justify-center rounded-full bg-white-10">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
          <p className="text-white-50 text-lg">{desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Features;
