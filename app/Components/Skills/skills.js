import styles from "./skills.module.css";
import { FaCheckCircle } from "react-icons/fa";
export default function Skills() {
  const frontEndSkills = ["HTML", "CSS", "JavaScript", "React.js", "Next.js"];
  const backEndSkills = ["Node.js", "Express.js", "MongoDB"];

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.content}>
        <h2>Skills</h2>
        <div className={styles.grid}>
          {/* Front-End Skills Box */}
          <div className={styles.box}>
            <h3>Front-End</h3>
            <div className={styles.skillsList}>
              {frontEndSkills.map((skill, index) => (
                <div key={index} className={styles.skill}>
                  <FaCheckCircle />
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Back-End Skills Box */}
          <div className={styles.box}>
            <h3>Back-End</h3>
            <div className={styles.skillsList}>
              {backEndSkills.map((skill, index) => (
                <div key={index} className={styles.skill}>
                  <FaCheckCircle />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
