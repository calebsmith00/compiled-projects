import { useState } from 'react'

/*
    * Concept: use this form to add a food entry to the journal
    * What is needed (might need to get specific later): 
    *   title of food (ex: McNuggets)
    *   calories
    *   carbohydrates
    *   sugars
    * After submission, the food item will be added to the individual user's journal, as well as to their [food bank]@
    * @ - the food bank will have use information from the user's journal OR if the user wants to just add a food they know they will eat in the future
    * @ - the user will be able to search through food bank and create a "shopping cart" for their overall meal and they will "check out", or in other words
    * @ - calculate the total amount of calories/carbs/etc. out of the meal
*/

export default function JournalAddForm() {
    let [foodName, setFoodName] = useState('')
    let [foods, setFoods] = useState([
        { id: 0, foodName: 'McNuggets' }
    ])

    const updateFoodName = e => {
        setFoodName(e.target.value)
    }
    
    const onClick = e => {
        e.preventDefault()

        setFoods([
            ...foods,
            {
                id: foods[foods.length]+1,
                foodName
            }
        ])
    }
    
    return (
        <div>
            <form>
                <input type="text" placeholder="Food name" onChange={updateFoodName} />
                <button onClick={onClick} type="submit">Submit</button>
            </form>

            {foods.map(food => (
                <p>{food.foodName}</p>
            ))}
        </div>
    )
}