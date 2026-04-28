import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./page_banner.module.scss";
import Link from "next/link";
import { ChevronRight, HouseFill } from "react-bootstrap-icons";

const PageBanner = ({ title, label, subtitle, image, videoSrc, buttonText, saveText }) => {
    return <section className={styles.PageBanner}
        style={{
            backgroundImage: videoSrc ? 'none' : `url('${image}')`
        }}
    >
        {videoSrc && (
            <video 
                src={videoSrc} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className={styles.bgVideo}
            />
        )}
        <div className={styles.overlay} />

        <CustomContainer>
            <div className={styles.cont}>
                <div className={styles.crumbs} data-aos="fade-up"
                    data-aos-delay="150"
                >
                    <Link href="/"><HouseFill /> Home</Link>
                    <span><ChevronRight /></span>
                    <span>{title}</span>
                </div>
                {label && <span className={styles.label} data-aos="fade-up" data-aos-delay="100">{label}</span>}
                <h1 data-aos="fade-up">{title}</h1>
                {saveText && <div className={styles.saveBadge} data-aos="zoom-in" data-aos-delay="250">{saveText}</div>}
                {subtitle && <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="200">{subtitle}</p>}
                {buttonText && (
                    <div className={styles.bannerBtnWrap} data-aos="fade-up" data-aos-delay="300">
                        <Link href="#contact" className={styles.bannerBtn}>
                            {buttonText}
                        </Link>
                    </div>
                )}
            </div>
        </CustomContainer>


    </section>
}

export default PageBanner;