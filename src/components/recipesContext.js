import React, { createContext, Component } from 'react';
export const InfoContext = createContext()

export class InfoProvider extends Component {

    state ={
        recipes: [
             //flourless-double-chocolate-banana-bread  
            {
                "_id": "flourless-double-chocolate-banana-bread",
                "title": "flourless double chocolate banana bread",
                "src": require("../assets/img/flourless-double-chocolate-bread.jpg"),
                "introtext": "This yummy goodness was made with our chocolate nuts and seed butter",
                "ingredients":[

                    "8 ripe Bananas",
                    "¼ cup of Winfinite foods Chocolate nuts n seeds butter",
                    "6 tablespoon date syrup",
                    "2 Eggs",
                    "2 teaspoon vanilla extract",
                    "2 tablespoons baking powder",
                    "¼ teaspoon salt",
                    "3 cups Oats (gluten-free if needed)",
                    "½ cup unsweetened cocoa powder",

                ],
                    
                "instructions":[
                    
                    "Preheat the oven to 175 degree or higher",
                    "Add the oats into a blender and process until they've broken down into a fine powder",
                    "Set aside four bananas, and add all the remaining ingredients and continue to process until the batter is smooth and creamy",
                    "Pour the batter into a greased loaf pan, spreading it out evenly, and then slice the last four bananas in half and press into the batter",
                    "Bake in the oven for 50 minutes to an hour or until a skewer comes out clean leave; to cool before serving",

                ],    
            },
            //vegetable nuts and seeds butter soup
            {
                "_id": "vegetable-nuts-and-seeds-butter-soup",
                "title": "vegetable nuts and seeds butter soup",
                "src": require("../assets/img/vegetable-soup.jpg"),
                "introtext": "This vegetable nuts and seeds butter soup is hearty, nutritious and lightly spicy; nuts n Seeds butter and sweet potato are a match made in vegan heaven.",
                "ingredients":[

                    "2 tablespoons of oil",
                    "1 onion, chopped",
                    "4 cloves garlic, peeled and diced",
                    "2 large sweet potatoes peeled and cubed (optional)",
                    "1  bell pepper finely sliced",
                    "6 medium tomatoes diced",
                    "½ cup tomato paste (optional)",
                    "2 cups of water",
                    "2 teaspoons mix spices",
                    "2 tablespoons lime or lemon juice",
                    "1 teaspoon salt",
                    "¼ cup of Winfinite foods Smooth Nuts 'n Seeds butter",
                    "1–2 cups of chopped spinach",
                    "Bunch of greens i.e parsley, kale chopped (optional)",

                ],
                    
                "instructions":[
                    
                    "Heat the oil in a large saucepan over medium heat and add the onion, garlic",
                    "Saute until soft and fragrant",
                    "Add sweet potatoes and continue to fry; then bell peppers, tomatoes, tomato paste (if using), spices and smooth nuts n seeds butter and give it a good mix",
                    "Pour in the water and place a lid, leave to simmer for 15-20 minutes or until the sweet potato is soft and gradually add/stir in the spinach and other greens (if using) until wilted",
                    "Once the soup is done stir in lime juice, season with salt to taste and serve with rice, semovita or  tuwo shinkafa. If you’re like me, just ladle into a bowl and top with pickled onions",
                ],  
            },
            //golden-hibiscus-mango-smoothie
            {
                "_id": "golden-hibiscus-mango-smoothie",
                "title": "golden hibiscus mango smoothie",
                "src": require("../assets/img/mango-smoothie.jpg"),
                "introtext": "",
                "ingredients":[

                    "2 cups chopped mangoes",
                    "2 tablespoons of Winfinite foods Smooth Nuts n Seeds butter",
                    "A cup of water",
                    "¼ cup fresh orange juice",
                    "1 ripe banana",
                    "1 teaspoon Golden Hibiscus mix",
                    "1 ½ tablespoons date syrup",
                    "2 cups ice cubes",
                    "¼ teaspoon cinnamon",   
                ],
                    
                "instructions":[  
                    "Process all ingredients except ice cubes in a blender until smooth",
                    "Add ice, then lightly blend again, just enough to still have a crunch",
                    "Pour evenly into 4 glasses, top with chopped mangoes and enjoy with a little sprinkle of cinnamon on top",
                ],  
            },
            //creamy-nuts-and-seed-butter-beans-curry
            {
                "_id": "creamy-nuts-and-seed-butter-beans-curry",
                "title": "creamy nuts and seed butter beans curry",
                "src": require("../assets/img/creamy-beans-curry.jpg"),
                "introtext": "Looking for a delicious vegan recipe? You've come to the right place. This one is an absolute banger. This creamy nuts n seeds butter beans curry will get rid of any midweek blues.",
                "ingredients":[

                    "2 tablespoons  of oil",
                    "2 medium onions, chopped",
                    "4 garlic cloves, peeled and diced",
                    "2 cups of brown beans (as preferred, RINSED)",
                    "2 bell pepper finely sliced",
                    "1 cup crushed tomatoes",
                    "4 cups of water",
                    "½ cup of Winfinite foods Tigerboost nuts n seeds butter",
                    "2 tablespoon mix spice",
                    "1 teaspoon salt",   
                ],
                    
                "instructions":[  
                    "In a large pan, heat the oil and add the garlic, chopped onions and the spices together.Cook for about 3mins, until the garlic scents the room.",
                    "At this point add in the rinsed beans, the tomatoes, bell pepper and the water-mix and let everything simmer for about 40mins (If you’re using black eyed peas, it might take a little longer)",
                    "Remember to do this at medium heat for the bean to get soft and avoid anything burning (no one likes to scrub a burnt pan)",
                    "Stir everything together and let simmer for another 15mins",
                    "Voila - you are done! Serve this soul warming dish with rice or bread",
                ],  
            },
            
            
                

        ],
       
    };


    render() {
        const {recipes} = this.state;
        return(
            <InfoContext.Provider value={{recipes}} >
                { this.props.children }
            </InfoContext.Provider>
        );
    }
}


