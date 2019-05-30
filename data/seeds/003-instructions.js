exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          step: 1,
          details:
            'Prepare pizza dough according to package directions. With floured hands, press dough onto a greased 14-in. pizza pan. Bake at 425° for 7-9 minutes or until lightly browned. Combine oil and 1 teaspoon garlic powder; brush over crust edges.',
          recipe_id: 1
        },
        {
          step: 2,
          details:
            'In a large skillet over medium heat, cook beef with onion powder and remaining garlic powder until no longer pink; drain.',
          recipe_id: 1
        },
        {
          step: 3,
          details:
            'Spread spaghetti sauce over crust to within 1 in. of edges. Top with beef mixture, pepperoni, Canadian bacon, mushrooms, olives and cheese.',
          recipe_id: 1
        },
        {
          step: 4,
          details:
            'Bake at 425° for 10-15 minutes or until cheese is melted and crust is golden brown.',
          recipe_id: 1
        },
        {
          step: 1,
          details:
            'In medium bowl, mix together tomato sauce, vinegar, garlic, chili powder, cumin, oregano, and sugar. Season with Adobo; set aside. ',
          recipe_id: 2
        },
        {
          step: 2,
          details:
            'Heat oil in large skillet over medium-high heat. Season chicken with Adobo. Cook chicken, turning once, until light golden brown on both sides, about 5 minutes. Add reserved tomato sauce mixture to pan; bring to a boil (be careful, the tomato sauce can splatter). Lower heat to medium low. Simmer, covered, until cooked through (thermometer will register 170 degrees F when inserted into thickest part of breast), flipping once, about 20 minutes. ',
          recipe_id: 2
        },
        {
          step: 3,
          details:
            'Transfer chicken to cutting board; reserve sauce in pan. Remove and discard bones and skin. Using two forks, shred chicken breast. Transfer chicken to skillet with sauce, mixing to combine; continue to cook until sauce reduces and blends into chicken, and mixture begins to caramelize, about 10 minutes more. ',
          recipe_id: 2
        },
        {
          step: 4,
          details:
            'Transfer chicken mixture to serving bowl. Spoon into warmed corn tortillas. Garnish with lettuce, tomatoes, avocados and/or onions, if desired. Sprinkle with hot sauce, if desired. ',
          recipe_id: 2
        },
        {
          step: 1,
          details:
            'Fry the half pound of bacon, drain and set aside in a warm place.',
          recipe_id: 3
        },
        {
          step: 2,
          details:
            'Allow your bacon to freeze 30 to 40 minutes. Then cut your slab into 1" strips, so each strip is really about 15 or so 1-inch pieces of bacon still frozen together. (You basically want chunks of frozen bacon small enough to put into food processor.) It processes much better while frozen, once thawed it becomes grossly slimy.',
          recipe_id: 3
        },
        {
          step: 3,
          details:
            "Once you've sliced your bacon, add to a food processor and pulse until your bacon is totally ground up. Of course if you have a grinder, use it!",
          recipe_id: 3
        },
        {
          step: 4,
          details:
            'Place your ground beef into a large bowl. Add cold ground up bacon, Worcestershire, onion and garlic powder and pepper. Mix by hand until bacon is well incorporated into ground beef. Do not pulse it together as this will destroy the blend. Resist the temptation.',
          recipe_id: 3
        },
        {
          step: 5,
          details:
            'Shape into patties, yielding approximately 12 - 4 ounce patties, of course you can do any size you desire. With my family we need 4 and then I freeze 4, wrapping each in plastic wrap and then into a freezer bag, they will freeze well for up to 3 months.',
          recipe_id: 3
        },
        {
          step: 6,
          details:
            'Grill or fry these, watch closely if grilling, a lot of grease will run, causing fires. Because there is bacon, you should cook these to well done. They will be very moist due to the bacon.',
          recipe_id: 3
        },
        {
          step: 7,
          details:
            'Fry the onions as in photo, over medium high heat on first side for 5 minutes. Flipped over and turned heat down to medium for another 4 to 6 minutes, bare in mind, times will change depending on thickness of burgers.',
          recipe_id: 3
        },
        {
          step: 8,
          details:
            'Brush butter on the sliced portion of top and bottom buns and place on the grill or on a griddle to toast.',
          recipe_id: 3
        },
        {
          step: 9,
          details:
            'Set the bottom of the bun on a serving dish, set one burger on the bottom.',
          recipe_id: 3
        },
        {
          step: 10,
          details:
            'Place your two slices of cheese on top, if desired, mixed. Cover with another burger and more cheese. Top with several slices of fried, drained warm bacon',
          recipe_id: 3
        },
        {
          step: 11,
          details:
            'Add lettuce, tomato and red onion slices, then top with upper portion of the brioche bun, cut side down. Use a steak knife or skewer to hold the burger together.',
          recipe_id: 3
        },
        {
          step: 12,
          details: 'Serve as desired.',
          recipe_id: 3
        }
      ]);
    });
};
