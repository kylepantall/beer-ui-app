'use client';

import { useEffect, useState } from 'react';
import { Card, Hero, NavBar, Container } from './components';
import Beer from './interfaces/beer';
import * as client from './lib/beer-client';
import { usePagination } from '@mantine/hooks';
import { Pagination, Center, rem } from '@mantine/core';

export default function Home() {
   const [beers, setBeers] = useState<Beer[]>([]);
   const pagination = usePagination({ total: 100, initialPage: 1 });

   useEffect(() => {
      client.getBeers({ per_page: 15, page: pagination.active }).then((beers) => setBeers(beers));
   }, [setBeers, pagination.setPage, pagination.active]);

   return (
      <>
         <NavBar />
         <Hero />
         <div
            style={{
               marginBottom: rem(10),
            }}>
            <Container centered>
               {beers.map((beer) => (
                  <Card key={beer.id} {...beer} />
               ))}
            </Container>
            <Center>
               <Pagination
                  value={pagination.active}
                  onChange={pagination.setPage}
                  total={beers.length}
               />
            </Center>
         </div>
      </>
   );
}
