import Beer from '../interfaces/beer';
import axios from 'axios';
import BeerSearchParams from '../interfaces/beer-search-params';

type DefaultPagination = {
   page?: number;
   per_page: number;
};

const defaultValues: DefaultPagination = {
   page: 1,
   per_page: 15,
};

const instance = axios.create({
   baseURL: 'https://api.punkapi.com/v2',
});

export async function getBeers(_pageParams: DefaultPagination = defaultValues): Promise<Beer[]> {
   return instance.get<Beer[]>('/beers', { params: _pageParams }).then((response) => response.data);
}

export async function getBeerById(id: string): Promise<Beer> {
   return instance.get<Beer[]>(`/beers/${id}`).then((response) => response.data[0]);
}

export async function getBeerWithParams(params: BeerSearchParams): Promise<Beer[] | undefined> {
   return instance.get<Beer[]>('/beers', { params }).then((response) => response.data);
}
