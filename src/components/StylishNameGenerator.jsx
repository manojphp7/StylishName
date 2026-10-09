"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import unicodeStyles, { categoryAnchorText } from "../../styles/unicodeStyles";

import Header from "./Header";

const StylishNameGenerator = ({
  selectedCategory = "All",
  dynamicName,
}) => {
  const router = useRouter();
  const [inputText, setInputText] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("inputText") || "";
    }
    return "";
  });

  const [selectedStyle, setSelectedStyle] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(
    selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
  );

  const handleChangeText = (text) => {
    setInputText(text);
  };

  const handleBoxClick = (style) => {
    setSelectedStyle(style);
    setShowModal(true);

    const styled = style.transform(inputText || "Your Name");
    navigator.clipboard.writeText(styled);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedStyle(null);
  };

  const filteredStyles =
    currentCategory === "All"
      ? unicodeStyles
      : unicodeStyles.filter((style) => style.category === currentCategory);

  const groupedStyles =
  currentCategory === "All"
    ? Object.keys(categoryAnchorText).map((cat) => {
        const catStyles = unicodeStyles.filter(
          (style) => style.category === cat
        );

        // shuffle and pick 10
        const shuffled = [...catStyles].sort(() => 0.5 - Math.random());
        const random10 = shuffled.slice(0, 10);

        return {
          category: cat,
          label: cat,
          styles: random10,
        };
      })
    : [
        {
          category: currentCategory,
          label: currentCategory,
          styles: unicodeStyles.filter(
            (style) => style.category === currentCategory
          ),
        },
      ];

  useEffect(() => {
    if (dynamicName && dynamicName.trim() !== "") {
      setInputText(dynamicName);
      localStorage.setItem("inputText", dynamicName);
    }
  }, [dynamicName]);

  return (
    <>
      <Header
        selectedCategory={selectedCategory}
        changeText={handleChangeText}
        dynamicName={dynamicName}
      />
      <div className="container">
        {groupedStyles.map(({ category, styles }) => (
          <div key={category} className="mb-5">
            <h4 className="mb-3 border-bottom pb-2">{category}</h4>
            <div className="row">
              {styles.map((style,index) => (
                <div
                  key={style.name + index}
                  className="col-md-6 col-lg-4 mb-4"
                  onClick={() => handleBoxClick(style)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="card h-100 shadow-sm">
                    <div className="card-body d-flex flex-column card_bg">
                      <h5 className="card-title" style={{ fontSize: "1rem" }}>
                        {/* {style.name} */}
                      </h5>
                      <p
                        className="card-text mb-0"
                        style={{ fontSize: "1.1rem", wordBreak: "break-word" }}
                      >
                        {style.transform(inputText || "Your Name")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {selectedStyle && (
          <div
            className={`modal fade ${showModal ? "show d-block modal-xl" : ""}`}
            tabIndex={-1}
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={closeModal}
          >
            <div
              className="modal-dialog modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedStyle.name}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <p style={{ fontSize: "1.3rem", wordBreak: "break-word" }}>
                    {selectedStyle.transform(inputText || "Your Name")}
                  </p>
                  <div className="alert alert-success mt-3" role="alert">
                    ✅ Has been 😎 <strong>copied</strong>. Now paste anywhere!
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default StylishNameGenerator;
