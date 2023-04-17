export const metadata = {
  title: 'Explore TV shows',
  description: 'This is a IMDb clone website',
};

export default function RootLayout({ children }) {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
}
