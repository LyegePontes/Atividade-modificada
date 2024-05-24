import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
//import MenuIcon from '@mui/icons-material/Menu';
import MenuIcon from '@mui/icons-material/Menu'; // Importando o ícone do menu

import AccountCircle from '@mui/icons-material/AccountCircle'; // Importando o ícone de conta

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary"> {/* Alterando a cor da AppBar para secundária */}
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon /> 
            </IconButton>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}> {/* Alterando o tamanho do título para h4 */}
              Gerenciamento Avançado de Projetos
            </Typography>
            <Button color="inherit" startIcon={<AccountCircle />}> {/* Adicionando um ícone de conta ao botão de login */}
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default Header;