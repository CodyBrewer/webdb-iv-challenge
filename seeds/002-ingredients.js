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
          'unit of measurement': 'packages (6-1/2 ounces)',
          recipe_id: 1
        },
        {
          name: 'olive oil',
          quantity: 1,
          'unit of measurement': 'tablespoon',
          recipe_id: 1
        },
        {
          name: 'garlic powder',
          quantity: 1.5,
          'unit of measurement': 'teaspoons',
          recipe_id: 1
        },
        {
          name: 'ground beef',
          quantity: 0.25,
          'unit of measurement': 'pound',
          recipe_id: 1
        },
        {
          name: 'onion powder',
          quantity: 0.5,
          'unit of measurement': 'teaspoon',
          recipe_id: 1
        },
        {
          name: 'spaghetti sauce',
          quantity: 0.66,
          'unit of measurement': 'cup',
          recipe_id: 1
        },
        {
          name: 'sliced pepperoni',
          quantity: 1,
          'unit of measurement': 'packages (3-1/2 ounces)',
          recipe_id: 1
        },
        {
          name: 'Canadian Bacon',
          quantity: 6,
          'unit of measurement': 'ounces',
          recipe_id: 1
        },
        {
          name: 'sliced fresh mushrooms',
          quantity: 0.25,
          'unit of measurement': 'cup',
          recipe_id: 1
        },
        {
          name: 'sliced ripe olives',
          quantity: 2,
          'unit of measurement': 'tablesoons',
          recipe_id: 1
        },
        {
          name: 'shredded part-skim mozzarella cheese',
          quantity: 2,
          'unit of measurement': 'cups',
          recipe_id: 1
        },
        {
          name: 'Goya Tomato Sauce',
          quantity: 2,
          'unit of measurement': '8 ounce can',
          recipe_id: 2
        },
        {
          name: 'Goya White Distilled Vinegar',
          quantity: 2,
          'unit of measurement': 'teaspoons',
          recipe_id: 2
        },
        {
          name: 'Goya Minced Garlic',
          quantity: 1,
          'unit of measurement': 'teaspoons',
          recipe_id: 2
        },
        {
          name: 'ancho chile powder',
          quantity: 3.5,
          'unit of measurement': '',
          recipe_id: 2
        },
        {
          name: 'Goya Ground Cumin',
          quantity: 1,
          'unit of measurement': 'teaspoon',
          recipe_id: 2
        },
        {
          name: 'Goya Oregano Leaf',
          quantity: 1,
          'unit of measurement': 'teaspoon',
          recipe_id: 2
        },
        {
          name: 'sugar',
          quantity: 1,
          'unit of measurement': 'teaspoon',
          recipe_id: 2
        },
        {
          name: 'Goya Extra Virgin Olive Oil',
          quantity: 2,
          'unit of measurement': 'tablespoons',
          recipe_id: 2
        },
        {
          name: 'Bone-in, skin-on chicken breasts',
          quantity: 2,
          'unit of measurement': 'pounds',
          recipe_id: 2
        },
        {
          name: 'Goya Pepper ',
          quantity: 1,
          'unit of measurement': 'tablespoons',
          recipe_id: 2
        },
        {
          name: 'Goya Corn Tortillas',
          quantity: 1,
          'unit of measurement':
            '(10 Ounce) package Goya Corn Tortillas, warmed',
          recipe_id: 2
        },
        {
          name: 'Finely Chopped White Onion',
          quantity: 0.25,
          'unit of measurement': 'cup',
          recipe_id: 2
        },
        {
          name: 'lime, cut into wedges',
          quantity: 1,
          'unit of measurement': 'lime',
          recipe_id: 2
        },
        {
          name: 'Coarsely Chpped Fresh Cilantro',
          quantity: 2,
          'unit of measurement': 'tablespoons',
          recipe_id: 2
        },
        {
          name: 'Goya Hot Sauce',
          quantity: 1,
          'unit of measurement': '(12 Ounce) Bottle',
          recipe_id: 2
        },
        {
          name: 'small yellow onion, coarsely chopped',
          quantity: 0.5,
          'unit of measurement': 'small yellow onion',
          recipe_id: 3
        },
        {
          name: 'garlic',
          quantity: 2,
          'unit of measurement': 'cloves, minced',
          recipe_id: 3
        },
        {
          name: 'extra-lean ground beef',
          quantity: 12,
          'unit of measurement': 'ounces',
          recipe_id: 3
        },
        {
          name: 'Montreal steak spice',
          quantity: 1,
          'unit of measurement': 'tablespoons',
          recipe_id: 3
        },
        {
          name: 'Worcestershire sauce',
          quantity: 2,
          'unit of measurement': 'tablespoons'
        },
        {
          name: 'finely ground cornmeal',
          quantity: 2,
          'unit of measurement': 'tablespoons',
          recipe_id: 3
        },
        {
          name: 'prepared whole-wheat pizza dough',
          quantity: 1,
          'unit of measurement': 'pound',
          recipe_id: 3
        },
        {
          name: 'jarred all-natural tomato sauce',
          quantity: 0.75,
          'unit of measurement': 'cup',
          recipe_id: 3
        },
        {
          name: 'jarred all-natural BBQ sauce',
          quantity: 0.75,
          'unit of measurement': 'cup',
          recipe_id: 3
        },
        {
          name: 'shredded low-fat mozzarella',
          quantity: 1,
          'unit of measurement': 'cup',
          recipe_id: 3
        },
        {
          name: 'large red onion',
          quantity: 0.5,
          'unit of measurement': 'large red onion',
          recipe_id: 3
        },
        {
          name: 'medium plum tomatoes, diced',
          quantity: 2,
          'unit of measurement': 'medium plum tomatoes',
          recipe_id: 3
        },
        {
          name: 'crispy bacon, crumbled',
          quantity: 3,
          'unit of measurement': 'slices',
          recipe_id: 3
        },
        {
          name: 'non-fat plain Greek yogurt',
          quantity: 0.33,
          'unit of measurement': 'cup',
          recipe_id: 3
        },
        {
          name: 'yellow or dijon mustard',
          quantity: 3,
          'unit of measurement': 'tablespoons',
          recipe_id: 3
        },
        {
          name: 'shredded iceberg lettuce',
          quantity: 1.5,
          'unit of measurement': 'cups',
          recipe_id: 3
        }
      ]);
    });
};
