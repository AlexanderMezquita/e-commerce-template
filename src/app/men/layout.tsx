export const metadata = {
  title: "Men's section ",
  description: "Abercrombie & Fitch template by Alex and Alam",
  icons: {
    icon: "./meta-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
