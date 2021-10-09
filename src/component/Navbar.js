import React from "react";

// Created a Separated Component for NavBar.
// We need to pass the paramters as an object  -> ALSO, KNOWN AS PROBS
// But make sure you USE THE SAME NAME, WHERE YOU HAVE PASSED THEM FIRST.
const navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {/* As we have a RULE: DON'T REPEAT THE CODE */}
          {/* SO, we are mapping through the entire "menuList" which contain all UNIQUE Category using MAP and curElem stores all the datas. */}
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
                // Always use Arrow function to call different function for not future complications.
                // So, just passing the category passed during clicking the button, to the filterItem.
                // So, that we can get ONLY those times recipes.
              >
                {curElem}
                {/* And I'm PRINTING time on my screen by iterating through the menuList*/}
                {/* Which contains ALL the UNIQUE categories */}

                {/* ALWAYS USE CURLY BRACES TO CALL / WRITE JS IN HTML */}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;
