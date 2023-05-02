import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
   inner: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: rem(56),

      [theme.fn.smallerThan('sm')]: {
         justifyContent: 'center',
      },
   },

   leftItems: {
      width: rem(260),

      [theme.fn.smallerThan('sm')]: {
         display: 'none',
      },
   },

   rightItems: {
      width: rem(260),

      [theme.fn.smallerThan('sm')]: {
         width: 'auto',
         marginLeft: 'auto',
      },
   },
}));
