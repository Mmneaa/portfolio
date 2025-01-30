"use client";
import styles from "./introduction.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Introduction() {
  return (
    <section className={styles.hero} id="introduction">
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src="/profile.png"
            alt="Mahmoud"
            className={styles.image}
            width={500}
            height={500}
          />
        </div>
        <div className={styles.textContainer}>
          <h1>Hi, I&apos;m Mahmoud Nabil</h1>
          <p>I&apos;m a junior Full-Stack Web Developer.</p>
          <div className={styles.icons}>
            <a
              href="https://github.com/Mmneaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mahmoud7nabil5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
