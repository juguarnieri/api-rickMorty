import "./globals.css";

export const metadata = {
  title: "Rick A nd Morty App",
  description: "Meu primeiro consumo de API grátis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
