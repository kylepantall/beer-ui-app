'use client';

import { Container, NavBar } from '@/app/components';
import Beer from '@/app/interfaces/beer';
import { Title } from '@mantine/core';
import { useParams } from 'next/navigation';

export default function BeerPage({ children }: { children: JSX.Element }) {
   const params = useParams() as Partial<Beer>;

   return (
      <main>
         <NavBar />
         abc
         <Container>
            <Title order={1}>{params.name}</Title>
            {children}
         </Container>
      </main>
   );
}
