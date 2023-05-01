'use client';

import { useEffect, useState } from 'react';
import { Card, Hero, NavBar, Container } from './components';
import Beer from './interfaces/beer';
import { getBeers } from './lib/beers';

const BeersFetcher = ({
  setBeers,
  children,
}: {
  setBeers: (beers: Beer[]) => void;
  children: JSX.Element | JSX.Element[];
}) => {
  useEffect(() => {
    getBeers().then((beers) => setBeers(beers));
  }, [setBeers]);

  return <>{children}</>;
};

export default function Home() {
  const [beers, setBeers] = useState<Beer[]>([]);

  return (
    <>
      <NavBar />
      <Hero />
      <Container>
        <BeersFetcher setBeers={setBeers}>
          {beers.map((beer) => (
            <Card key={beer.id} {...beer} />
          ))}
        </BeersFetcher>
      </Container>
    </>
  );
}
