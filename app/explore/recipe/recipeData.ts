const recipeData = [
  { 
    id: '0', 
    title: 'Chocolate Pancakes', 
    img: require('./assets/pancake.jpg'), 
    time: '30', 
    cal: '250',
    description: 'Fluffy pancakes made with cocoa powder and topped with chocolate syrup.',
    ingredients: ['Flour', 'Cocoa Powder', 'Milk', 'Eggs', 'Sugar', 'Baking Powder'],
    steps: [
      'In a bowl, mix flour, cocoa powder, baking powder, and sugar.',
      'In another bowl, whisk the milk and eggs together.',
      'Combine wet and dry ingredients until smooth.',
      'Heat a skillet over medium heat and pour in batter to form pancakes.',
      'Cook until bubbles form, then flip and cook the other side until golden.',
      'Serve with chocolate syrup.'
    ]
  },
  { 
    id: '1', 
    title: 'Spaghetti Bolognese', 
    img: require('./assets/bolognese.webp'), 
    time: '40', 
    cal: '550',
    description: 'A classic Italian pasta dish with rich meat sauce.',
    ingredients: ['Spaghetti', 'Ground Beef', 'Tomato Sauce', 'Onions', 'Garlic', 'Olive Oil', 'Salt', 'Pepper'],
    steps: [
      'Boil spaghetti in salted water until al dente.',
      'In a pan, heat olive oil and sauté onions and garlic until soft.',
      'Add ground beef and cook until browned.',
      'Pour in tomato sauce and simmer for 20 minutes.',
      'Serve sauce over spaghetti and garnish with parmesan.'
    ]
  },
  { 
    id: '2', 
    title: 'Chicken Curry', 
    img: require('./assets/chickenCurry.jpg'), 
    time: '20', 
    cal: '150',
    description: 'A spicy and flavorful chicken curry dish.',
    ingredients: ['Chicken Breast', 'Coconut Milk', 'Curry Powder', 'Onion', 'Garlic', 'Ginger', 'Salt', 'Pepper'],
    steps: [
      'Cut chicken breast into cubes and season with salt and pepper.',
      'In a pan, sauté onion, garlic, and ginger until fragrant.',
      'Add chicken to the pan and cook until browned.',
      'Add curry powder and stir to coat the chicken.',
      'Pour in coconut milk and simmer for 10-15 minutes.',
      'Serve hot with rice or naan bread.'
    ]
  },
  { 
    id: '3', 
    title: 'Caesar Salad', 
    img: require('./assets/caesar.jpg'), 
    time: '60', 
    cal: '500',
    description: 'A fresh salad with romaine, croutons, and Caesar dressing.',
    ingredients: ['Romaine Lettuce', 'Croutons', 'Parmesan Cheese', 'Caesar Dressing', 'Salt', 'Pepper'],
    steps: [
      'Chop romaine lettuce and place in a large bowl.',
      'Add croutons and grated parmesan cheese.',
      'Drizzle Caesar dressing over the salad.',
      'Toss the salad until all ingredients are coated.',
      'Season with salt and pepper to taste.',
      'Serve immediately.'
    ]
  },
  { 
    id: '4', 
    title: 'Stir-Fry', 
    img: require('./assets/stirfry.webp'), 
    time: '15', 
    cal: '200',
    description: 'A quick and healthy vegetable stir-fry.',
    ingredients: ['Broccoli', 'Carrots', 'Bell Peppers', 'Snap Peas', 'Soy Sauce', 'Garlic', 'Olive Oil'],
    steps: [
      'Cut broccoli, carrots, and bell peppers into bite-sized pieces.',
      'In a wok or large pan, heat olive oil over medium-high heat.',
      'Add garlic and stir until fragrant.',
      'Add vegetables and stir-fry until tender-crisp.',
      'Pour in soy sauce and stir to coat the vegetables.',
      'Serve hot over rice or noodles.'
    ]
  },
  { 
    id: '5', 
    title: 'French Toast', 
    img: require('./assets/frenchtoast.jpg'), 
    time: '10', 
    cal: '300',
    description: 'Classic French toast with a touch of cinnamon.',
    ingredients: ['Bread Slices', 'Eggs', 'Milk', 'Cinnamon', 'Vanilla Extract', 'Butter', 'Maple Syrup'],
    steps: [
      'In a bowl, whisk together eggs, milk, cinnamon, and vanilla extract.',
      'Dip each slice of bread in the egg mixture, coating both sides.',
      'In a pan, melt butter over medium heat.',
      'Cook each slice of bread until golden brown on both sides.',
      'Serve warm with maple syrup and powdered sugar.'
    ]
  }
];

export default recipeData;
