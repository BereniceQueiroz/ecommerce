import SVGCloseIcon from '@/assets/close.svg?react';

import {CloseIcon, List, MenuFull, MenuLink, MenuNav} from './styles';
import {MenuProps} from './types';

export function Menu({open, onClose}: MenuProps) {
  return (
    <MenuFull aria-hidden={!open} isOpen={open}>
      <CloseIcon>
        <SVGCloseIcon aria-label="Close Menu" role="button" onClick={onClose} />
      </CloseIcon>
      <MenuNav>
        <List>
          <MenuLink
            to="/"
            onClick={() => {
              onClose();
            }}>
            Home
          </MenuLink>
          <MenuLink
            to="#"
            onClick={() => {
              onClose();
            }}>
            Categorias
          </MenuLink>
          <MenuLink
            to="#"
            onClick={() => {
              onClose();
            }}>
            Sobre
          </MenuLink>
          <MenuLink
            to="#"
            onClick={() => {
              onClose();
            }}>
            Contato
          </MenuLink>
        </List>
      </MenuNav>
    </MenuFull>
  );
}
