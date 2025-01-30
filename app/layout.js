import "./globals.css";

export const metadata = {
  title: "Mahmoud Nabil - Full-Stack Web Developer",
  description: "A minimalistic portfolio for personal use.",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
