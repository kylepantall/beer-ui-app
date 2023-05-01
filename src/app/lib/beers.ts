import Beer from '../interfaces/beer';

export const getBeers = async (): Promise<Beer[]> => {
  const response = await fetch('https://api.punkapi.com/v2/beers');
  const beers = (await response.json()) as Beer[];
  return beers;
};
