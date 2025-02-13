import { Footer } from './components/footer';
import { Header } from './components/header';

import styles from './layout.module.scss';

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
