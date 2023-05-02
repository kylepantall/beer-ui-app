import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
   card: {
      display: 'inline-block',
      maxWidth: rem(300),
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
   },

   imageSection: {
      backgroundColor: theme.white,
      padding: theme.spacing.md,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: `${rem(1)} solid ${
         theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
   },

   label: {
      marginBottom: theme.spacing.xs,
      lineHeight: 1,
      fontWeight: 700,
      fontSize: theme.fontSizes.xs,
      letterSpacing: rem(-0.25),
      textTransform: 'uppercase',
   },

   accordion: {
      width: '100%',
   },

   accordionControl: {
      margin: 0,
      padding: 0,
      fontSize: theme.fontSizes.xs,

      '& > span': {
         padding: `${rem(2)} ${rem(1)}`,
         margin: rem(4),
      },
   },

   accordionPanel: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
      padding: rem(2),
   },

   section: {
      padding: theme.spacing.md,
      borderTop: `${rem(1)} solid ${
         theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
   },

   icon: {
      marginRight: rem(5),
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
   },
}));
