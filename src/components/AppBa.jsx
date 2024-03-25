import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
  Handle
} from 'react95';
import styled from "styled-components";
import logoIMG from '/logo.svg';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;


function AppBa() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>

          <img
            src={logoIMG}
            alt='logo'
            style={{ height: '20px', marginRight: 4 }}
          />


        </div>
        <div>
          <MenuList inline theme="matrix">
            <MenuListItem square disabled size="sm">
              <span role='img' aria-label='🌿'>
                🌿
              </span>
            </MenuListItem>
            <Handle size={38} />
            <MenuListItem size="sm" primary as={'a'} href='https://google.com' target='_blank'>Home</MenuListItem>
            <MenuListItem size="sm">Progetti</MenuListItem>
            <MenuListItem size="sm">Blog</MenuListItem>
          </MenuList>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export { AppBa };
