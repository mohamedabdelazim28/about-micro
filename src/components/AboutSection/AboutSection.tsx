"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("h2", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from("p", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        delay: 0.6,
        ease: "power3.out",
      });
    }, sectionRef); 

    return () => ctx.revert(); 
  }, []);

  return (
    <section ref={sectionRef} className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>Built By Students, Powered By Community</h2>

        <p className={styles.subtitle}>
          Built within the MSC student activity community to transform learning into an active, collaborative, and competitive experience
        </p>

        <div className={styles.cards}>
  <div className={styles.card}>
    <div className={styles.icon}>⚙️</div>
    <h3>Challenge-Based Learning</h3>
    <p>Empower Students Through Real Challenges</p>
  </div>

  <div className={styles.card}>
    <div className={styles.icon}>💡</div>
    <h3>Real Performance Evaluation</h3>
    <p>Connect education with measurable skill assessment</p>
  </div>

  <div className={styles.card}>
    <div className={styles.icon}>🎯</div>
    <h3>Student-driven community</h3>
    <p>create a sustainable tech community led by students.</p>
  </div>
</div>
      </div>
    </section>
  );
}