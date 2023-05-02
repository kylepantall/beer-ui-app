'use client';

import Beer from '@/app/interfaces/beer';
import * as client from '@/app/lib/beer-client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BeerPage() {
   const [beer, setBeer] = useState<Beer>();
   const { id } = useParams();

   const BeerFetcher = ({
      setBeer,
      children,
   }: {
      setBeer: (beers: Beer) => void;
      children: JSX.Element | JSX.Element[];
   }) => {
      useEffect(() => {
         client.getBeerById(id).then((beer) => setBeer(beer));
      }, [setBeer]);

      return <>{children}</>;
   };

   if (!beer) {
      return <h1>Beer not found</h1>;
   }

   return (
      <BeerFetcher setBeer={setBeer}>
         <h1>{beer.name}</h1>
      </BeerFetcher>
   );
}
