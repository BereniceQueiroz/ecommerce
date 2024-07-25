import {useLocation} from 'react-router-dom';

import SvgArrowIcon from '@/assets/arrow.svg?react';

import {
  BreadcrumbContainer,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from './styles';
import {BreadcrumbProps} from './types';

export function Breadcrumb({items}: BreadcrumbProps) {
  const {pathname} = useLocation();
  return (
    <BreadcrumbContainer>
      <BreadcrumbList>
        {items?.map((item, index) => (
          <BreadcrumbItem key={index}>
            {index > 0 && <SvgArrowIcon />}
            <BreadcrumbLink to={item.url} isActive={pathname === item.url}>
              {item.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </BreadcrumbContainer>
  );
}
