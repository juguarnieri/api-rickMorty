import "./globals.css";

export const metadata = {
  title: "Rick And Morty App",
  description: "Meu primeiro consumo de API grátis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
