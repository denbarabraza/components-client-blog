import React, { FC, memo } from 'react';

import { Theme } from '@/components/Theme';

import { IButton } from './interface.ts';
import { ButtonItem } from './styled.ts';

export const Button: FC<IButton> = memo(
  ({
    type,
    backgroundColor = '#fbd050',
    hoverColor = '#eec14a',
    dataCy,
    title,
    isValid,
    callBack,
  }) => {
    return (
      <Theme>
        <ButtonItem
          data-cy={dataCy}
          onClick={callBack}
          disabled={!isValid}
          type={undefined ?? type}
          backgroundColor={backgroundColor}
          hoverColor={hoverColor}
        >
          {title}
        </ButtonItem>
      </Theme>
    );
  },
);
