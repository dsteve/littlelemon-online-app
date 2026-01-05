import "@/index.css";

import restaurant from "@assets/restaurantfood.jpg";
import spicy from "@assets/spicy-16.png";
import gluten_free from "@assets/gluten-free-16.png";
import vegetarian from "@assets/vegetarian-16.png";

import { useState } from "react";

function MenuList(props) {
  return (
    <div>
      {props.children.map((item, i) => (
        <MenuItem key={i}>{item}</MenuItem>
      ))}
    </div>
  );
}

function MenuItem(props) {
  // Assumption : there is ONLY one single child in the MenuItem component.
  const child = props.children;
  const ingredients = child.ingredients;
  const ingredientsCount = ingredients.length;
  return (
    <div className="flex flex-col px-4 py-2 font-karla font-normal text-lg text-left">
      <div className="flex flex-row gap-2 font-medium">
        {child.dish}
        <div className="flex flex-row">
          <div className="w-6 m-0.5">
            {child.spicy && (
              <img
                src={spicy}
                alt="spicy"
                className="w-full h-full object-fill object-center"
              />
            )}
          </div>
          <div className="w-6 m-0.5">
            {child.gluten_free && (
              <img
                src={gluten_free}
                alt="gluten free"
                className="w-full h-full object-cover object-center"
              />
            )}
          </div>
          <div className="w-6 m-0.5">
            {child.vegetarian && (
              <img
                src={vegetarian}
                alt="vegetarian"
                className="w-full h-full object-cover object-center"
              />
            )}
          </div>
        </div>
        <div className="px-4 text-secondary-orange">${child.price}</div>
      </div>
      <p className=" px-4 py-2 font-markazi max-w-prose">
        {ingredients.map(
          (item, i) =>
            item.charAt(0).toUpperCase() +
            item.slice(1) +
            (ingredientsCount - (i + 1) ? ", " : ".")
        )}
      </p>
    </div>
  );
}

function Menu() {
  const appetizers = [
    {
      dish: "Mezze Platter",
      ingredients: ["hummus", "baba ghanoush", "pita bread", "olive oil"],
      spicy: false,
      gluten_free: false,
      vegetarian: true,
      price: 14.5,
    },
    {
      dish: "Patatas Bravas",
      ingredients: ["crispy potatoes", "spicy tomato sauce", "aioli"],
      spicy: true,
      gluten_free: true,
      vegetarian: true,
      price: 9.5,
    },
    {
      dish: "Dolmas",
      ingredients: ["vine leaves", "rice", "herbs", "lemon"],
      spicy: false,
      gluten_free: true,
      vegetarian: true,
      price: 10.0,
    },
    {
      dish: "Gambas al Ajillo",
      ingredients: ["shrimp", "garlic", "chili", "olive oil"],
      spicy: true,
      gluten_free: true,
      vegetarian: false,
      price: 13.5,
    },
    {
      dish: "Halloumi Grillé",
      ingredients: ["halloumi cheese", "lemon", "oregano"],
      spicy: false,
      gluten_free: true,
      vegetarian: true,
      price: 11.5,
    },
  ];

  const pasta = [
    {
      dish: "Spaghetti alle Vongole",
      ingredients: ["spaghetti", "clams", "garlic", "white wine", "parsley"],
      spicy: false,
      gluten_free: false,
      vegetarian: false,
      price: 18.0,
    },
    {
      dish: "Penne Arrabbiata",
      ingredients: ["penne", "tomato sauce", "garlic", "chili"],
      spicy: true,
      gluten_free: false,
      vegetarian: true,
      price: 15.0,
    },
    {
      dish: "Pasta Puttanesca",
      ingredients: ["pasta", "tomatoes", "olives", "capers", "anchovies"],
      spicy: false,
      gluten_free: false,
      vegetarian: false,
      price: 16.5,
    },
    {
      dish: "Orzo aux Légumes Méditerranéens",
      ingredients: ["orzo", "zucchini", "eggplant", "tomatoes", "olive oil"],
      spicy: false,
      gluten_free: false,
      vegetarian: true,
      price: 15.5,
    },
    {
      dish: "Pasta aux Fruits de Mer",
      ingredients: ["mixed seafood", "tomato sauce", "garlic"],
      spicy: false,
      gluten_free: false,
      vegetarian: false,
      price: 19.5,
    },
    {
      dish: "Gnocchi au Pesto",
      ingredients: ["potato gnocchi", "basil pesto", "parmesan"],
      spicy: false,
      gluten_free: false,
      vegetarian: true,
      price: 16.0,
    },
  ];

  const mainDishes = [
    {
      dish: "Paella Mariscos",
      ingredients: ["rice", "shrimp", "mussels", "calamari", "saffron"],
      spicy: false,
      gluten_free: true,
      vegetarian: false,
      price: 24.0,
    },
    {
      dish: "Grilled Sea Bass",
      ingredients: ["sea bass", "lemon", "olive oil", "herbs"],
      spicy: false,
      gluten_free: true,
      vegetarian: false,
      price: 23.5,
    },
    {
      dish: "Chicken Shawarma Plate",
      ingredients: ["marinated chicken", "yogurt sauce", "spices"],
      spicy: false,
      gluten_free: true,
      vegetarian: false,
      price: 19.0,
    },
    {
      dish: "Lamb Kofta",
      ingredients: ["ground lamb", "spices", "parsley", "onion"],
      spicy: false,
      gluten_free: true,
      vegetarian: false,
      price: 21.0,
    },
    {
      dish: "Moussaka",
      ingredients: ["eggplant", "potatoes", "minced meat", "béchamel"],
      spicy: false,
      gluten_free: false,
      vegetarian: false,
      price: 18.5,
    },
    {
      dish: "Couscous Végétarien",
      ingredients: ["semolina", "seasonal vegetables", "chickpeas", "spices"],
      spicy: false,
      gluten_free: false,
      vegetarian: true,
      price: 17.5,
    },
    {
      dish: "Grilled Octopus",
      ingredients: ["octopus", "lemon", "olive oil", "oregano"],
      spicy: false,
      gluten_free: true,
      vegetarian: false,
      price: 26.0,
    },
  ];

  const desserts = [
    {
      dish: "Baklava",
      ingredients: ["phyllo pastry", "nuts", "honey"],
      spicy: false,
      gluten_free: false,
      vegetarian: true,
      price: 8.5,
    },
    {
      dish: "Crème Catalane",
      ingredients: ["custard", "citrus zest", "caramelized sugar"],
      spicy: false,
      gluten_free: true,
      vegetarian: true,
      price: 7.5,
    },
    {
      dish: "Greek Yogurt & Honey",
      ingredients: ["greek yogurt", "honey", "walnuts"],
      spicy: false,
      gluten_free: true,
      vegetarian: true,
      price: 6.5,
    },
    {
      dish: "Orange & Almond Cake",
      ingredients: ["almonds", "orange", "eggs"],
      spicy: false,
      gluten_free: true,
      vegetarian: true,
      price: 7.0,
    },
  ];

  const tabEnum = Object.freeze({
    APPETIZERS: "Appetizers",
    PASTA: "Pasta",
    MAIN: "Main",
    DESSERTS: "Desserts",
  });
  const tabList = [
    tabEnum.APPETIZERS,
    tabEnum.PASTA,
    tabEnum.MAIN,
    tabEnum.DESSERTS,
  ];
  const [tabSelector, setTabSelector] = useState(tabEnum.APPETIZERS);

  return (
    <main>
      <div className="grid grid-cols-[2fr_8fr] w-full bg-white">
        <div className="col-start-1 overflow-hidden">
          <img
            src={restaurant}
            alt="restaurant"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="col-start-2 grid grid-flow-row justify-center font-karla text-black">
          <div className="font-bold text-4xl text-center">
            <p>Menu</p>
            <p className="text-sm">
              Every last ingredient has been sourced and is as authentic as can
              be imagined
            </p>
          </div>
          <div className="flex justify-center content-center pt-5 font-medium text-2xl text-center">
            {tabList.map((tabItem, i) => (
              <div
                key={i}
                className={
                  "flex-1 px-4 py-1 border hover:border-secondary-orange hover:text-secondary-orange" + " " +
                  (tabItem === tabSelector
                    ? "border-black text-black"
                    : "border-secondary-grey text-secondary-grey")
                }
              >
                <button onClick={() => setTabSelector(tabItem)}>
                  {tabItem}
                </button>
              </div>
            ))}
          </div>
          {tabSelector == tabEnum.APPETIZERS && (
            <section id="appetizers">
              <div className="grid grid-flow-col justify-center bg-white font-medium text-2xl">
                <MenuList>{appetizers}</MenuList>
              </div>
            </section>
          )}
          {tabSelector == tabEnum.PASTA && (
            <section id="pasta">
              <div className="grid grid-flow-col justify-center bg-white font-medium text-2xl">
                <MenuList>{pasta}</MenuList>
              </div>
            </section>
          )}
          {tabSelector == tabEnum.MAIN && (
            <section id="main">
              <div className="grid grid-flow-col justify-center bg-white font-medium text-2xl">
                <MenuList>{mainDishes}</MenuList>
              </div>
            </section>
          )}
          {tabSelector == tabEnum.DESSERTS && (
            <section id="desserts">
              <div className="grid grid-flow-col justify-center bg-white font-medium text-2xl">
                <MenuList>{desserts}</MenuList>
              </div>

            </section>
          )}
        </div>
      </div>
    </main>
  );
}

export default Menu;
