import { createStyles, rem } from '@mantine/core';
import BeerSplash from '../../../public/beer-splash.jpg';

export const useStyles = createStyles((theme) => ({
   wrapper: {
      position: 'relative',
      paddingTop: rem(120),
      paddingBottom: rem(100),
      backgroundImage: `url(${BeerSplash.src})`,
      backgroundSize: 'cover',
      backgroundPosition: `center ${rem(-180)}`,

      [theme.fn.smallerThan('md')]: {
         backgroundPosition: 'center',
      },

      [theme.fn.smallerThan('xs')]: {
         paddingTop: rem(80),
         paddingBottom: rem(50),
         backgroundPosition: 'center',
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
