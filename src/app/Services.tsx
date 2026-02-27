"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import styles from "./Page.module.css";

function Services() {
  const spanRef = useRef<HTMLSpanElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const [isDraggingSpan, setIsDraggingSpan] = useState(false);
  const [isDraggingList, setIsDraggingList] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [spanWidth, setSpanWidth] = useState(0);
  const [spanPosition, setSpanPosition] = useState(0);

  useEffect(() => {
    const updateSpanWidth = () => {
      if (!ulRef.current || !spanRef.current) return;
      const scrollContainer = ulRef.current.parentElement;
      if (!scrollContainer) return;
      const ratio = scrollContainer.offsetWidth / ulRef.current.scrollWidth;
      const width = Math.max(50, scrollContainer.offsetWidth * ratio);
      setSpanWidth(width);
    };
    updateSpanWidth();
    window.addEventListener("resize", updateSpanWidth);
    return () => window.removeEventListener("resize", updateSpanWidth);
  }, []);

  const updateSpanFromScroll = () => {
    if (!ulRef.current || !spanRef.current || isDraggingSpan) return;
    const scrollContainer = ulRef.current.parentElement;
    if (!scrollContainer) return;
    const scrollRatio =
      ulRef.current.scrollLeft /
      (ulRef.current.scrollWidth - scrollContainer.offsetWidth);
    const maxSpanX = scrollContainer.offsetWidth - spanWidth;
    setSpanPosition(scrollRatio * maxSpanX);
  };

  const handleSpanMouseDown = (e: React.MouseEvent) => {
    if (!spanRef.current) return;
    setIsDraggingSpan(true);
    setStartX(e.clientX - spanPosition);
    e.preventDefault();
  };

  const handleSpanMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingSpan || !spanRef.current || !ulRef.current) return;
    e.preventDefault();
    const scrollContainer = ulRef.current.parentElement;
    if (!scrollContainer) return;
    const newX = e.clientX - startX;
    const maxSpanX = scrollContainer.offsetWidth - spanWidth;
    const clampedX = Math.max(0, Math.min(newX, maxSpanX));
    setSpanPosition(clampedX);
    const scrollRatio = clampedX / maxSpanX;
    ulRef.current.scrollLeft =
      scrollRatio * (ulRef.current.scrollWidth - scrollContainer.offsetWidth);
  };

  const handleSpanMouseUp = () => {
    setIsDraggingSpan(false);
  };

  const handleListMouseDown = (e: React.MouseEvent) => {
    if (!ulRef.current) return;
    setIsDraggingList(true);
    setStartX(e.pageX);
    setScrollLeft(ulRef.current.scrollLeft);
    ulRef.current.style.cursor = "grabbing";
    e.preventDefault();
  };

  const handleListMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingList || !ulRef.current) return;
    e.preventDefault();
    const x = e.pageX - startX;
    ulRef.current.scrollLeft = scrollLeft - x;
    updateSpanFromScroll();
  };

  const handleListMouseUp = () => {
    setIsDraggingList(false);
    if (ulRef.current) {
      ulRef.current.style.cursor = "grab";
    }
  };

  const handleScroll = () => {
    updateSpanFromScroll();
  };

  return (
    <section className={styles.services}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>
            <span>Build</span>
            <span className={styles.dot}></span>
            <span>Top-Notch Homes</span>
            <span className={styles.dot}></span>
            <span>Wealth</span>
          </h1>
        </div>
        <div className={styles.list}>
          <ul
            ref={ulRef}
            onMouseDown={handleListMouseDown}
            onMouseMove={handleListMouseMove}
            onMouseUp={handleListMouseUp}
            onMouseLeave={handleListMouseUp}
            onScroll={handleScroll}
            style={{
              cursor: isDraggingList ? "grabbing" : "grab",
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {Array(6)
              .fill("")
              .map((_, index) => (
                <li key={index}>
                  <p>0{index + 1}</p>
                  <Image
                    src={`/housing.jpg`}
                    width={400}
                    height={300}
                    alt="Service"
                  />
                  <h4>Alex White Estate Housing</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium. Totam rem
                    aperiam, eaque ipsa quae ab illo inventore
                  </p>
                </li>
              ))}
          </ul>
        </div>
        <div
          className={styles.scroll}
          onMouseMove={handleSpanMouseMove}
          onMouseUp={handleSpanMouseUp}
          onMouseLeave={handleSpanMouseUp}
        >
          <span
            ref={spanRef}
            onMouseDown={handleSpanMouseDown}
            style={{
              position: "relative",
              left: `${spanPosition}px`,
              width: `${spanWidth}px`,
              cursor: isDraggingSpan ? "grabbing" : "grab",
              userSelect: "none",
              display: "block",
            }}
          ></span>
        </div>
      </div>
    </section>
  );
}

export default Services;
