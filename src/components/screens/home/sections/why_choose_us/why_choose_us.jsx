import { useEffect, useRef, useState } from "react";
import styles from "./why_choose_us.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import { CheckCircle } from "react-bootstrap-icons";

const countsData = [
  { text: "Happy Travelers", count: 71, prefix: "k+" },
  { text: "Tour Packages", count: 250, prefix: "+" },
  { text: "Destinations Covered", count: 50, prefix: "+" },
  { text: "Happy Countries", count: 10, prefix: "+" },
];


const cards = [
  {
    head: "Established & Trusted ",
    caption:
      "Serving travelers since 1995 in Trichy and expanding to Chennai in 2009.",
  },
  {
    head: "Expert Leadership",
    caption:
      "Guided by seasoned professionals with a shared vision for service excellence.",
  },
  {
    head: "Tailored Travel Solutions",
    caption:
      "Customized itineraries crafted to match your preferences, schedules, and budget.",
  },
  {
    head: "Customer-Centric Values",
    caption:
      "Committed to making every journey safe, seamless, and memorable.",
  },
];

const WhyChooseUsSection = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const [counts, setCounts] = useState(countsData.map(() => 0));

  // Detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-20% 0px  -20% 0px",
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Animate counting
  useEffect(() => {
    if (!startCount) return;

    const intervals = countsData.map((item, index) => {
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < item.count) {
            newCounts[index] += Math.ceil(item.count / 50);
            if (newCounts[index] > item.count) {
              newCounts[index] = item.count;
            }
          }
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, [startCount]);

  return (
    <section className={styles.WhyChooseUsSection}>
      <CustomContainer>


        <div className={styles.wrap}>
          <div className={styles.left} data-aos="fade-right">
            <div className={styles.mainImg} />
            <div className={styles.subImg} />
          </div>
          <div className={styles.right}>
            <SectionHeading
              title={"Why Choose Us"}
              head="Trusted thousands of travelers worldwide"
              caption="At World Wings Tours and Travels, we believe that travel is more than movement—it's about experiences, memories, and connections. Let us take care of your journey with professionalism, passion, and a personal touch that sets us apart."
            />
            <div className={styles.cards}>
              {cards.map((card, idx) => {
                return (
                  <div
                    className={styles.card}
                    key={`card_${idx}`}
                    data-aos="fade-left"
                    data-aos-delay={idx * 100}
                  >
                    <CheckCircle />
                    <div>
                      <h3>{card.head}</h3>
                      <p>{card.caption}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.counts}
          ref={sectionRef}
        >
          {countsData.map((item, index) => (
            <div key={item.text} className={styles.count}>
              <h3>
                {counts[index]}
                {item.prefix}
              </h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
}

export default WhyChooseUsSection;

