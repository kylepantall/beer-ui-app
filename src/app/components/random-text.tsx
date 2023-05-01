import { createStyles, Text, Transition } from '@mantine/core';
import { useState, useEffect } from 'react';

const useStyles = createStyles((theme) => ({
  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },
}));

export function getRandomText(): string {
  const randomText: string[] = [
    'favorite',
    'best',
    'most delicious',
    'most amazing',
    'most awesome',
    'fizziest',
    'most refreshing',
    'bubbliest',
  ];

  return randomText[Math.floor(Math.random() * randomText.length)];
}

export default function RandomText() {
  const { classes } = useStyles();
  const [randomText, setRandomText] = useState('');

  useEffect(() => {
    setRandomText(getRandomText());
    const interval = setInterval(() => setRandomText(getRandomText()), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Transition transition={'skew-up'} mounted={true}>
      {(styles) => (
        <Text styles={styles} component="span" inherit className={classes.highlight}>
          {randomText}
        </Text>
      )}
    </Transition>
  );
}
