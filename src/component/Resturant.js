import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
// Here we are importing everything we need. Because Resturant is our main component for the project.

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
    // ... is a "Spread operator" which says that. Keep the data which were there in the previous state.
  ),
  "All",
];
// Here we are making a list or array you can say. Which is storing all the UNIQUE category of the recipes we have.
// So, the reason I'm using SET and map function is used to iterate through entire API and get the category stored in curElem and returned.
// "All" is added because we don't have any category named "All" in the API. SO, I needed to create it Separated.

console.log(uniqueList);

const Resturant = () => {
  // HOOKS -> useState is to store the data for us to future operations. And it should be declared just after the component declaration.
  // It returns two things. 1 -> 1st parameter which stores all the Values from the API, 2 -> 2nd parameter which will be used if amy modification is required in the datadset.
  // In the useState(parameter) the parameter passed, is the import name we can used for getting that component to this file / array of datas.
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  // As we have created Separate blocks for each time recipes.
  // So, we need to filter the data using the category.
  // SO, made a new component filterItem() which is taking the category as an argument
  // Because we Don’t havr to REPEAT the code for all the times of the recipes.

  const filterItem = (category) => {
    // A Separate if condition for "All" because we don't have any category named "All" in the API.
    // So, if the category is ALL, just set the setMenuData to the entire dataset that is Menu(look the import part) and return.
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    // Creating a variable which is storing all the data to there specific category.
    // Using the filter function of JS and curElem will have all the data and we are comparing the category passed as a parameter.
    // If it is EQUAL to the API we have then, just update the setMenuData with the new updatedList.
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  // Lastlty, we havr to return ONE TAG, containing everything.
  // SO, in <> we are first passing the filterItem as an ATTRIBUTE to the NavBar component with the menuList which has all UNIQUE category.
  // And menuData which has ALL the datas from API to create MenuCard.
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
// We use EXPORT so, that we can IMPORT this component to different component as well.
