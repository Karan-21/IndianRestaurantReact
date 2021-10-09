import React from "react";

// Created a Separated Component for MenuCard.
// We need to pass the paramter as an object -> ALSO, KNOWN AS PROBS
// But make sure you USE THE SAME NAME, WHERE YOU HAVE PASSED THEM FIRST
// SO, HERE THE ENTIRE DATA FROM THE API IN MENUCARD.
const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;
          // Without using curElem.id , curElem.name ... etc multiple times.
          // Just DISTRUCK it and use only the naming convention, what you need from that API.

          return (
            <>
              <div className="card-container" key={id}>
                {/* As I am using the field from API, I need an KEY to access them */}
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  {/*  YOU CAN SEE ABOVE, I'M JUST USING THE NAMING CONVENTION, TO GET THE VALUES FROM THE API, */}
                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
