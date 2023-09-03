import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { styledValue } from '@/theme/theme';


export const Theme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={styledValue}>{children}</ThemeProvider>;
};
