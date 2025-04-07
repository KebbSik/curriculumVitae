import { motion } from "framer-motion";
import apple from "../../assets/stickers/apple.png";
import snakeHiss from "../../assets/stickers/snake_hiss.png";
import wallBurst from "../../assets/stickers/wall_burst.png";
import AboutCard from "./AboutCard";

// const descriptionsArrPL = [
//   "Jestem początkującym programistą, który pełen pasji podchodzi do wyzwań. Na co dzień uczę się i tworzę aplikacje internetowe, starając się nieustannie rozwijać swoje umiejętności. Z każdym nowym projektem poszerzam swoją wiedzę o technologie, takie jak JavaScript, React, TypeScript, i wiele innych.",
//   "Podczas tworzenia szczególną uwagę poświęcam na kreatywność, ponieważ wierzę, że aplikacje nie tylko muszą działać, ale także przyciągać uwagę użytkownika. Staram się, aby moje projekty były nie tylko funkcjonalne, ale także wyjątkowe i wciągające. Zawsze dążę do tego, by wyróżniały się niepowtarzalnym stylem, ciekawe rozwiązania wizualne i przemyślane interakcje.",
//   "Stworzyłem interaktywne portfolio, aby lepiej prezentować swoje pomysły. Zachęcam Cię do zapoznania się z nim i chętnie poznam Twoją opinię - zarówno dobrą, jak i konstruktywną. Możesz się ze mną skontaktować przez LinkedIn. :)",
// ];

const descriptionsArr = [
  "I am a beginner programmer who approaches challenges with passion. On a daily basis, I learn and create web applications, constantly working on developing my skills. By creating new project, I expand my knowledge of technologies such as JavaScript, React, TypeScript, and many others.",
  "During the creating process, I pay special attention to creativity. I believe that applications should not only work, but also capture the user's attention. I always try to make my projects not only functional but also unique and engaging. I always aim to make them in 'my style' - interesting visual solutions and thoughtful interactions.",
  "I created an interactive portfolio to better showcase my ideas. Feel free to check it out and would love to hear your constructive feedback. You can contact me through LinkedIn. :)",
];

const About = () => {
  return (
    <section>
      <div className="about_wrapper">
        <div className="grid">
          <motion.div
            className="about_Card"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "anticipate" }}
            viewport={{ once: true }}
          >
            <AboutCard image={wallBurst} content={descriptionsArr[0]} />
          </motion.div>
          <motion.div
            className="about_Card"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <AboutCard image={apple} isReversed content={descriptionsArr[1]} />
          </motion.div>
          <motion.div
            className="about_Card"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "anticipate" }}
            viewport={{ once: true }}
          >
            <AboutCard image={snakeHiss} content={descriptionsArr[2]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
