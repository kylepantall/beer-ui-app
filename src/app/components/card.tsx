'use client';

import {
   Accordion,
   Badge,
   Button,
   Card as MantineCard,
   Divider,
   Flex,
   Group,
   Image,
   Popover,
   rem,
   Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPhotoX } from '@tabler/icons-react';
import Link from 'next/link';
import Beer from '../interfaces/beer';
import { useStyles } from './card.styled';

export function Card(beerItem: Beer) {
   const { classes } = useStyles();
   const [opened, { close, open }] = useDisclosure(false);

   const Ingredients = () => {
      return (
         <Accordion fz={'sm'} className={classes.accordion} variant="filled">
            <Accordion.Item value="hop">
               <Accordion.Control className={classes.accordionControl}>Hops</Accordion.Control>
               <Accordion.Panel fz={'xs'} className={classes.accordionPanel}>
                  {beerItem.ingredients.hops
                     .map((hop) => `${hop.name} (${hop.amount.value} ${hop.amount.unit})`)
                     .join(', ')}
               </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="malt">
               <Accordion.Control className={classes.accordionControl}>Malt</Accordion.Control>
               <Accordion.Panel className={classes.accordionPanel}>
                  {beerItem.ingredients.malt
                     .map((malt) => `${malt.name} (${malt.amount.value} ${malt.amount.unit})`)
                     .join(', ')}
               </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="yeast">
               <Accordion.Control className={classes.accordionControl}>Yeast</Accordion.Control>
               <Accordion.Panel className={classes.accordionPanel}>
                  {beerItem.ingredients.yeast}
               </Accordion.Panel>
            </Accordion.Item>
         </Accordion>
      );
   };

   return (
      <MantineCard withBorder radius="md" className={classes.card}>
         <MantineCard.Section className={classes.imageSection}>
            {beerItem.image_url ? (
               <Image
                  src={beerItem.image_url}
                  height={140}
                  fit="contain"
                  alt={`Image of ${beerItem?.name}`}
               />
            ) : (
               <IconPhotoX height={140} width={140} />
            )}
         </MantineCard.Section>

         <Group position="apart" mt="md">
            <div>
               <Text lineClamp={1} variant="gradient" fz="lg" fw="bolder" c="white">
                  {beerItem.name}
               </Text>
               <Text title={beerItem.tagline} pb={rem(4)} fz="xs" lineClamp={1} c="dimmed">
                  {beerItem.tagline}
               </Text>
               <Divider my={rem(4)} />
               <Popover width={300} position="bottom" withArrow shadow="md" opened={opened}>
                  <Popover.Target>
                     <Text
                        mt={rem(10)}
                        fz="xs"
                        c="dimmed"
                        lineClamp={2}
                        onMouseOver={open}
                        onMouseLeave={close}>
                        {beerItem.description}
                     </Text>
                  </Popover.Target>
                  <Popover.Dropdown sx={{ pointerEvents: 'none' }}>
                     <Text size="sm">{beerItem.description}</Text>
                  </Popover.Dropdown>
               </Popover>
            </div>
            <Flex direction="row" gap="xs" rowGap="xs" wrap="wrap">
               <Badge variant="gradient">ABV: {beerItem.abv}</Badge>
               <Badge variant="gradient">EBC: {beerItem.ebc}</Badge>
               <Badge variant="gradient">SRM: {beerItem.srm}</Badge>
            </Flex>
         </Group>

         <MantineCard.Section className={classes.section} mt="md">
            <Group position={'left'} mt={'xs'}>
               <Text fz="md" fw={700} sx={{ lineHeight: 1 }}>
                  Ingredients
               </Text>
               {Ingredients()}
            </Group>
         </MantineCard.Section>

         <MantineCard.Section className={classes.section}>
            <Group spacing={30} align="end">
               <div>
                  <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
                     {beerItem.volume.value}
                  </Text>
                  <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
                     {beerItem.volume.unit}
                  </Text>
               </div>

               <Link href={`/beer/${beerItem.id}`} passHref>
                  <Button radius="xl" variant={'gradient'} style={{ flex: 1 }}>
                     View detailed
                  </Button>
               </Link>
            </Group>
         </MantineCard.Section>
      </MantineCard>
   );
}
