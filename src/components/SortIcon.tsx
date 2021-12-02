import { css } from '@linaria/core';
import type { SortDirection } from '../types';

const arrow = css`
  fill: currentColor;

  > path {
    transition: d 0.1s;
  }
`;

const arrowClassname = `rdg-sort-arrow ${arrow}`;

export interface SortIconProps {
  sortDirection: SortDirection | undefined;
}

export function SortIcon({ sortDirection }: SortIconProps) {
  return sortDirection !== undefined ? (
    <svg viewBox="0 0 12 8" width="12" height="8" className={arrowClassname} aria-hidden>
      <path d={sortDirection === 'ASC' ? 'M0 8 6 0 12 8' : 'M0 0 6 8 12 0'} />
    </svg>
  ) : null;
}
