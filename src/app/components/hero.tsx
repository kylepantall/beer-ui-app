'use client';

import { Title, Text, Container, Overlay } from '@mantine/core';
import { RandomText, SearchBox } from '../components';
import { useStyles } from './hero.styled';

export function Hero() {
   const { classes } = useStyles();

   return (
      <div className={classes.wrapper}>
         <Overlay color="#000" opacity={0.5} zIndex={1} />

         <div className={classes.inner}>
            <Title className={classes.title}>
               Find your next <RandomText /> beer!
            </Title>

            <Container size={640}>
               <Text className={classes.description}>
                  Find your next favorite beer! Search for a beer by name, abv, volume or
                  ingredients...
               </Text>
            </Container>

            <div className={classes.controls}>
               <SearchBox />
            </div>
         </div>
      </div>
   );
}
