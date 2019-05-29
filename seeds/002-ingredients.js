exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          name: 'pizza crust mix',
          quantity: 2,
          unit: 'packages (6-1/2 ounces)',
          recipe_id: 1
        },
        {
          name: 'olive oil',
          quantity: 1,
          unit: 'tablespoon',
          recipe_id: 1
        },
        {
          name: 'garlic powder',
          quantity: 1.5,
          unit: 'teaspoons',
          recipe_id: 1
        },
        {
          name: 'ground beef',
          quantity: 0.25,
          unit: 'pound',
          recipe_id: 1
        },
        {
          name: 'onion powder',
          quantity: 0.5,
          unit: 'teaspoon',
          recipe_id: 1
        },
        {
          name: 'spaghetti sauce',
          quantity: 0.66,
          unit: 'cup',
          recipe_id: 1
        },
        {
          name: 'sliced pepperoni',
          quantity: 1,
          unit: 'packages (3-1/2 ounces)',
          recipe_id: 1
        },
        {
          name: 'Canadian Bacon',
          quantity: 6,
          unit: 'ounces',
          recipe_id: 1
        },
        {
          name: 'sliced fresh mushrooms',
          quantity: 0.25,
          unit: 'cup',
          recipe_id: 1
        },
        {
          name: 'sliced ripe olives',
          quantity: 2,
          unit: 'tablesoons',
          recipe_id: 1
        },
        {
          name: 'shredded part-skim mozzarella cheese',
          quantity: 2,
          unit: 'cups',
          recipe_id: 1
        },
        {
          name: 'Goya Tomato Sauce',
          quantity: 2,
          unit: '8 ounce can',
          recipe_id: 2
        },
        {
          name: 'Goya White Distilled Vinegar',
          quantity: 2,
          unit: 'teaspoons',
          recipe_id: 2
        },
        {
          name: 'Goya Minced Garlic',
          quantity: 1,
          unit: 'teaspoons',
          recipe_id: 2
        },
        {
          name: 'ancho chile powder',
          quantity: 3.5,
          unit: '',
          recipe_id: 2
        },
        {
          name: 'Goya Ground Cumin',
          quantity: 1,
          unit: 'teaspoon',
          recipe_id: 2
        },
        {
          name: 'Goya Oregano Leaf',
          quantity: 1,
          unit: 'teaspoon',
          recipe_id: 2
        },
        {
          name: 'sugar',
          quantity: 1,
          unit: 'teaspoon',
          recipe_id: 2
        },
        {
          name: 'Goya Extra Virgin Olive Oil',
          quantity: 2,
          unit: 'tablespoons',
          recipe_id: 2
        },
        {
          name: 'Bone-in, skin-on chicken breasts',
          quantity: 2,
          unit: 'pounds',
          recipe_id: 2
        },
        {
          name: 'Goya Pepper ',
          quantity: 1,
          unit: 'tablespoons',
          recipe_id: 2
        },
        {
          name: 'Goya Corn Tortillas',
          quantity: 1,
          unit: '(10 Ounce) package Goya Corn Tortillas, warmed',
          recipe_id: 2
        },
        {
          name: 'Finely Chopped White Onion',
          quantity: 0.25,
          unit: 'cup',
          recipe_id: 2
        },
        {
          name: 'lime, cut into wedges',
          quantity: 1,
          unit: 'lime',
          recipe_id: 2
        },
        {
          name: 'Coarsely Chpped Fresh Cilantro',
          quantity: 2,
          unit: 'tablespoons',
          recipe_id: 2
        },
        {
          name: 'Goya Hot Sauce',
          quantity: 1,
          unit: '(12 Ounce) Bottle',
          recipe_id: 2
        },
        {
          name: 'bacon, smoked, not frozen',
          quantity: 0.5,
          unit: 'pounds',
          recipe_id: 3
        },
        {
          name: 'bacon, frozen slightly',
          quantity: 1,
          unit: 'pounds',
          recipe_id: 3
        },
        {
          name: 'ground beef 90% or better',
          quantity: 2,
          unit: 'pounds',
          recipe_id: 3
        },
        {
          name: 'garlic powder or granulated garlic',
          quantity: 1.5,
          unit: 'teaspoons',
          recipe_id: 3
        },
        {
          name: 'grated onion',
          quantity: 4,
          unit: 'tablespoons',
          recipe_id: 3
        },
        {
          name: 'freshly ground black pepper',
          quantity: 0.5,
          unit: 'teaspoons',
          recipe_id: 3
        },
        {
          name: 'Worcestershire sauce, optional',
          quantity: 2,
          unit: 'tablespoons',
          recipe_id: 3
        },
        {
          name: 'Cheddar, Gouda or American (an orange cheese)',
          quantity: 12,
          unit: 'slices',
          recipe_id: 3
        },
        {
          name: 'Swiss, Provolone or Jack cheese (a white cheese)',
          quantity: 12,
          unit: 'slices',
          recipe_id: 3
        },
        {
          name: 'red onion, slice',
          quantity: 1,
          unit: 'red onion',
          recipe_id: 3
        },
        {
          name: 'tomato, slice',
          quantity: 1,
          unit: 'tomato',
          recipe_id: 3
        },
        {
          name: 'Green Lettuce',
          quantity: 1,
          unit: 'head',
          recipe_id: 3
        },
        {
          name: 'Brioche Buns',
          quantity: 1,
          unit: 'package of 12',
          recipe_id: 3
        },
        {
          name: 'Butter',
          quantity: 1,
          unit: 'stick',
          recipe_id: 3
        }
      ]);
    });
};
