import { rest } from 'msw';
import { COCKTAIL_URL } from '@features/api';

const mockData = {
  drinks: [
    {
      idDrink: '11023',
      strDrink: 'Almeria',
      strVideo: null,
      strCategory: 'Ordinary Drink',
      strAlcoholic: 'Alcoholic',
      strGlass: 'Cocktail glass',
      strInstructions:
        'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.',
      strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/rwsyyu1483388181.jpg',
    },
    {
      idDrink: '13020',
      strDrink: 'Sangria',
      strVideo: null,
      strCategory: 'Punch / Party Drink',
      strAlcoholic: 'Alcoholic',
      strGlass: 'Pitcher',
      strInstructions:
        'Mix all together in a pitcher and refrigerate. Add cloves and cinnamon sticks to taste. Serve in wine glasses.',
      strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/xrvxpp1441249280.jpg',
    },
    {
      idDrink: '12856',
      strDrink: 'Tia-Maria',
      strVideo: null,
      strCategory: 'Homemade Liqueur',
      strAlcoholic: 'Alcoholic',
      strGlass: 'Collins Glass',
      strInstructions:
        'Boil water, sugar and coffe for 10 mins and let cool. Add rum and vanilla. Put in clean bottle(s) and leave for 1 week before using.',
      strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/sih81u1504367097.jpg',
    },
    {
      idDrink: '11112',
      strDrink: 'Bloody Maria',
      strVideo: null,
      strCategory: 'Ordinary Drink',
      strAlcoholic: 'Alcoholic',
      strGlass: 'Old-fashioned glass',
      strInstructions:
        'Shake all ingredients (except lemon slice) with cracked ice and strain into an old-fashioned glass over ice cubes. Add the slice of lemon and serve.',
      strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/yz0j6z1504389461.jpg',
    },
    {
      idDrink: '11524',
      strDrink: 'Imperial Fizz',
      strVideo: null,
      strCategory: 'Ordinary Drink',
      strAlcoholic: 'Alcoholic',
      strGlass: 'Highball glass',
      strInstructions:
        'Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.',
      strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/zj1usl1504884548.jpg',
    },
    {
      idDrink: '13024',
      strDrink: 'Sweet Sangria',
      strVideo: null,
      strCategory: 'Punch / Party Drink',
      strAlcoholic: 'Alcoholic',
      strGlass: 'Pitcher',
      strInstructions:
        'Dissolve the sugar in hot water and cool. Peel the citrus fruits and break into wedges. Mix the wine, sugar syrup, fruit, and Fresca in a pitcher and put in the fridge for a few hours. Serve in tall glasses with a straw.',
      strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/uqqvsp1468924228.jpg',
    },
    {
      idDrink: '12706',
      strDrink: 'Imperial Cocktail',
      strVideo: null,
      strCategory: 'Cocktail',
      strAlcoholic: 'Alcoholic',
      strGlass: 'Cocktail glass',
      strInstructions: 'Shake with ice and strain into cocktail glass.',
      strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/bcsj2e1487603625.jpg',
    },
    {
      idDrink: '13026',
      strDrink: 'Sangria The  Best',
      strVideo: null,
      strCategory: 'Punch / Party Drink',
      strAlcoholic: 'Alcoholic',
      strGlass: 'Pitcher',
      strInstructions:
        'Mix wine, sugar and fruit, and let sit in the fridge for 18-24 hours. The mixture will have a somewhat syrupy consistency. Before serving stir in brandy and cut the mixture with soda water until it have a thinner, more wine like consistency. Serve from a pitcher in wine glasses.',
      strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/vysywu1468924264.jpg',
    },
    {
      idDrink: '178326',
      strDrink: 'White Wine Sangria',
      strVideo: null,
      strCategory: 'Punch / Party Drink',
      strAlcoholic: 'Alcoholic',
      strGlass: 'Pitcher',
      strInstructions:
        'Chop the Lemon, Lime and other fruits into large chunks. Fill the Pitcher with the white wine and mix in the Apple Brandy. Top to taste with soda water.',
      strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/hnuod91587851576.jpg',
    },
  ],
};
const HTTP_OK = 200;

export const handlers = [
  rest.get(`${COCKTAIL_URL}search.php`, (req, res, ctx) => {
    const initialLetter = req.url.searchParams.get('f');

    if (!initialLetter) {
      // return 200 with no data
      // the real api does the same thing
      return res(ctx.status(HTTP_OK));
    }

    // filter mock data by initial letter
    const filteredMockData = mockData.drinks.filter((drink) => {
      return drink.strDrink[0].toLowerCase() === initialLetter.toLowerCase();
    });

    return res(
      ctx.status(HTTP_OK),
      ctx.json({
        drinks: filteredMockData,
      }),
    );
  }),
];
