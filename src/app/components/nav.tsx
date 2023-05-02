'use client';

import { Container, Group, Header } from '@mantine/core';
import Image from 'next/image';
import Logo from '../../../public/icons/logo-text-yellow.svg';
import { useStyles } from './nav.styled';

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
