'use client';

import { Center, Flex } from '@mantine/core';

export function Container({
   centered,
   children,
}: {
   centered?: boolean;
   children: JSX.Element | JSX.Element[];
}): JSX.Element {
   const component = (
      <Flex mx={100} my={40} gap={20} wrap={'wrap'}>
         {children}
      </Flex>
   );

   return centered ? <Center>{component}</Center> : <>{component}</>;
}
