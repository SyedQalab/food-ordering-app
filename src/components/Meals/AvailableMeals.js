import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./availableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [error, setError] = useState(null);
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchMealsHandler() {
    setError(null);
    try {
      const response = await fetch(
        "https://fetch-api-24df2-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      console.log("vegeta: ", data);

      const meals = [];

      for (const key in data) {
        meals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(meals);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      console.log("qlb error:", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMealsHandler();
  }, []);

  //==========
  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul style={{ textAlign: "center" }}>
          {isLoading && <h1>Loading...</h1>}
        </ul>
        <ul style={{ textAlign: "center" }}>{error && <h1>{error}</h1>}</ul>
        <ul>{!isLoading && mealsList}</ul>

        {console.log("goku error: ", error)}
      </Card>
    </section>
  );
};

export default AvailableMeals;
