import React, { FC, memo } from 'react';

import { InputItem } from '@/components/Input/styled.ts';
import { Theme } from '@/components/Theme';

import { IInput } from './interface.ts';

export const Input: FC<IInput> = memo(
  ({
    placeholder,
    value,
    onChange,
    dataCy,
    borderColor = '#0000007F',
    focusColor = '#fbd050',
  }) => {
    return (
      <Theme>
        <InputItem
          borderColor={borderColor}
          focusColor={focusColor}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          data-cy={dataCy}
        />
      </Theme>
    );
  },
);
