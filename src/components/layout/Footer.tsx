import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <p className={styles.copyright}>
                    © {new Date().getFullYear()} Career Quest. All rights reserved.
                </p>
                <div className={styles.links}>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
            </div>
        </footer>
    );
}
