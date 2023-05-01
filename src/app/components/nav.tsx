'use client';

import { createStyles, Header, Group, Container, rem } from '@mantine/core';
import Image from 'next/image';
import Logo from '../../../public/icons/logo-text-yellow.svg';

const useStyles = createStyles((theme) => ({
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

export function NavBar() {
  const { classes } = useStyles();

  return (
    <Header height={56}>
      <Container className={classes.inner}>
        <Group className={classes.leftItems} spacing={5}></Group>
        <Image src={Logo} height={70} alt="Ale! Yeah Logo" />
        <Group spacing={0} className={classes.rightItems} position="right" noWrap />
      </Container>
    </Header>
  );
}
