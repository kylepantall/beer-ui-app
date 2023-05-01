'use client';

import { Title, Text, Container, Overlay, createStyles, rem } from '@mantine/core';
import BeerSplash from '../../../public/beer-splash.jpg';
import RandomText from './random-text';
import SearchBox from './search-box';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(180),
    paddingBottom: rem(130),
    backgroundImage: `url(${BeerSplash.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    [theme.fn.smallerThan('xs')]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    maxWidth: 640,
    margin: `calc(${theme.spacing.xl} * 1.5) auto 0`,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    flexDirection: 'column',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
      maxWidth: undefined,
    },
  },
}));

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
            Find your next favorite beer! Search for a beer by name, abv, volumne or ingredients...
          </Text>
        </Container>

        <div className={classes.controls}>
          <SearchBox />
        </div>
      </div>
    </div>
  );
}
