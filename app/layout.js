import "./globals.css";

export const metadata = {
  title: "Mahmoud Nabil - Front-End Engineer",
  description:
    "Portfolio of Mahmoud Nabil, a passionate Junior Front-End Engineer.",
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
