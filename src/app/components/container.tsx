'use client';

import { Flex } from '@mantine/core';

export function Container({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element {
  return (
    <Flex mx={100} my={40} gap={20} wrap={'wrap'}>
      {children}
    </Flex>
  );
}
