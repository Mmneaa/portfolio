import styles from "./about.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.content}>
        <h2>About Me</h2>
        <div className={styles.grid}>
          {/* Text Section */}
          <div className={styles.text}>
            <p>
              Hi, I&apos;m Mahmoud Mohamed Nabil, a junior full-stack web
              developer who made various websites whether static or responsive
              and interactive websites. <br /> sites that are user-friendly and
              intuitive to use.
            </p>
            <p>
              Using a variety of modern tools like React.js, Next.js, Node.js,
              Express.js and MongoDB <br />I can make a modern, fast and
              efficient website.
            </p>
          </div>

          {/* Education & Training Box */}
          <div className={styles.box}>
            <h3>Education & Training</h3>
            <ul>
              <li>
                <strong>University</strong>
                <p>Mansoura University</p>
                <p>BSc Computer Science</p>
              </li>
              <li>
                <strong>Training</strong>
                <p>National Telecommunication Institute</p>
                <p>Front-End Web development</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
