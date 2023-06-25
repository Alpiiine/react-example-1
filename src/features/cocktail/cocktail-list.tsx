import { Card } from '@ui/card';

export interface Cocktail {
  /**
   * ID of the cocktail
   */
  idDrink: number;
  /**
   * Name of the cocktail
   */
  strDrink: string;
  /**
   * Category of the cocktail
   */
  strCategory: string;
  /**
   * Is alcoholic or not
   */
  strAlcoholic: string;
  /**
   * Type of glass
   */
  strGlass: string;
  /**
   * Instructions for preparing the cocktail
   */
  strInstructions: string;
  /**
   * URL of the thumbnail image
   */
  strDrinkThumb: string;
  /**
   * Video URL, could be null
   */
  strVideo: string;
}

export interface CocktailListProps {
  cocktails: Cocktail[];
}

export function CocktailList(props: CocktailListProps) {
  const { cocktails } = props;

  return cocktails.map((cocktail: Cocktail) => (
    <Card
      key={cocktail.idDrink}
      imageUrl={cocktail.strDrinkThumb}
      title={cocktail.strDrink}
      subtitle={cocktail.strCategory}
      description={cocktail.strInstructions}
      linkUrl={cocktail.strVideo}
      linkDescription={
        cocktail.strVideo ? 'Watch video instructions' : 'No video available'
      }
    />
  ));
}
