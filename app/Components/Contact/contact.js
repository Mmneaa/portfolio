import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.content}>
        <h2>Contact</h2>
        <table className={styles.table}>
          <tbody>
            {/* Email Row */}
            <tr>
              <td>
                <a
                  href="mailto:mahmood7nabil5@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mahmood7nabil5@gmail.com
                </a>
              </td>
            </tr>

            {/* LinkedIn Row */}
            <tr>
              <td>
                <a
                  href="https://www.linkedin.com/in/mahmoud7nabil5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </td>
            </tr>

            {/* Phone Number Row */}
            <tr>
              <td>
                <a href="tel:+201021583076">+201021583076</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
