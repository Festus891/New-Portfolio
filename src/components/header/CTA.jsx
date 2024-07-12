import React from "react";
import CV from "../../asset/Aderibigbe resume.pdf";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div className="cta">
      <motion.a
        href="https://drive.google.com/file/d/1G4axHneuV7BCXLQmBHtFewoAmjUKFhED/view?usp=drive_link"
        className="btn"
        target="_blank"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        whileHover={{
          scale: [1, 1.1, 1, 1.1, 1, 1.1],
          boxShadow: "0px 0px 8px rgb(255, 255, 255)",
        }}
      >
        Resume
        <FaDownload />
      </motion.a>
      <motion.a
        href="#contact"
        className="btn btn-primary"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255, 255, 255)" }}
      >
        Contact me
      </motion.a>
    </div>
  );
};

export default CTA;
