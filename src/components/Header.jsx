"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { categoryAnchorText } from "../../styles/unicodeStyles";

const Header = ({ selectedCategory = "All", changeText, dynamicName }) => {
  const [inputText, setInputText] = useState(() => {
    if (dynamicName) {
      return dynamicName;
    } else if (typeof window !== "undefined") {
      return localStorage.getItem("inputText") || "";
    }
    return "";
  });

  const scrollRef = useRef(null);

  // Restore scroll position on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedScroll = localStorage.getItem("categoryScroll");
      if (savedScroll && scrollRef.current) {
        scrollRef.current.scrollLeft = parseInt(savedScroll, 10);
      }
    }
  }, []);

  // Save scroll position on scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      localStorage.setItem(
        "categoryScroll",
        scrollRef.current.scrollLeft.toString()
      );
    }
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="container py-4">
      {/* Logo */}
      <p
        className="mb-4 text-center logo"
        style={{
          fontFamily: "monospace",
          fontWeight: "bold",
          color: "#6d46cb",
          fontSize: "40px",
        }}
      >
        Stylish Name
      </p>

      {/* Input */}
      <input
        type="text"
        value={inputText}
        placeholder="Enter your name"
        onChange={(e) => {
          if (changeText) {
            changeText(e.target.value);
          }
          setInputText(e.target.value);
          localStorage.setItem("inputText", e.target.value);
        }}
        className="form-control form-control-lg mb-4"
      />

      {/* Slider with buttons */}
      <div className="d-flex align-items-center">
        <button
          type="button"
          className="btn btn-light me-2 scrollArrow d-none d-md-block"
          onClick={scrollLeft}
        >
          ←
        </button>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="mb-3 d-flex flex-nowrap overflow-auto"
          style={{
            gap: "0.5rem",
            scrollbarWidth: "none",
          }}
        >
          {/* Home */}
          <Link
            key={"All"}
            href={`/`}
            title="Home"
            className={`btn flex-shrink-0 ${
              selectedCategory === "All"
                ? "btn-purple active"
                : "btn-outline-secondary"
            }`}
          >
            Stylish Name
          </Link>

          {/* Dynamically render from categoryAnchorText */}
          {Object.keys(categoryAnchorText).map((cat) => (
            <Link
              key={cat}
              href={`/${cat.toLowerCase()}.html`}
              title={categoryAnchorText[cat]}
              className={`btn flex-shrink-0 ${
                selectedCategory === cat
                  ? "btn-purple active"
                  : "btn-outline-secondary"
              }`}
            >
              {categoryAnchorText[cat]}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="btn btn-light ms-2 scrollArrow d-none d-md-block"
          onClick={scrollRight}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Header;
