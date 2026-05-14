import PageBanner from "@/components/common/page_banner/page_banner";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./legal.module.scss";

const LegalScreen = ({ title, children }) => {
    return (
        <>
            <PageBanner title={title} videoSrc="/videos/bg_video.mp4" />
            <section className={styles.LegalScreen}>
                <CustomContainer>
                    <div className={styles.content}>
                        {children}
                    </div>
                </CustomContainer>
            </section>
        </>
    );
};

export default LegalScreen;
