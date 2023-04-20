import styles from '../../../styles/DetailsPage.module.css';

export async function generateMetadata({ params }) {
  return {
    title: params.mediaName,
  };
}

export default function RootLayout({ children }) {
  return (
    <main className={styles.main}>
      <div>{children}</div>
    </main>
  );
}
