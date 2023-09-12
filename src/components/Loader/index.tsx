import React, { FC } from 'react';

import { ILoader } from '@/components/Loader/interface.ts';
import { Theme } from '@/components/Theme';

import { Container, Spinner, Wrapper } from './styled.ts';

export const Loader: FC<ILoader> = ({
  borderTopColor = '#5a34a9',
  borderColor = '#eec14a',
  backgroundColorContainer = '#e5e5e5ff',
}) => {
  return (
    <Theme>
      <Container backgroundColorContainer={backgroundColorContainer}>
        <Wrapper>
          <Spinner borderColor={borderColor} borderTopColor={borderTopColor} />
        </Wrapper>
      </Container>
    </Theme>
  );
};
