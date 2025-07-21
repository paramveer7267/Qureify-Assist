import { steps } from "../constants/index";
import { motion } from "framer-motion";
import TitleHeader from "../components/TitleHeader";
// Animation variant for step cards
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-16 px-6 md:px-12 md:mt-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          <TitleHeader title="How it Works" sub="💡AI-powered care, broken into 3 simple steps😍"/>
        </motion.h2>
        

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-xl shadow-md cursor-pointer hover:shadow-xl transition-all duration-300"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariant}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-white-50">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
