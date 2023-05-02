'use client';

import { createStyles } from '@mantine/core';
import { TypeAnimation } from 'react-type-animation';

const useStyles = createStyles((theme) => ({
   highlight: {
      color: theme.colors[theme.primaryColor][4],
   },
}));

const sequences = [
   ['fizzy', 1000],
   ['favorite', 1000],
   ['frosty', 1300],
   ['fresh', 1200],
   ['flavorful', 1400],
   ['bubbly', 1200],
   ['bold', 1100],
   ['aromatic', 1200],
   ['smooth', 1300],
   ['rich', 1000],
];

export function RandomText(): JSX.Element {
   const { classes } = useStyles();

   return (
      <TypeAnimation
         className={classes.highlight}
         sequence={sequences.flat()}
         wrapper="span"
         repeat={Infinity}
         speed={50}
      />
   );
}
