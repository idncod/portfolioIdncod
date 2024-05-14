import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import './hamburger.scss';

function Hamburger() {
	const [hamburgerDrawerMenuOpen, setHamburgerDrawerMenuOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setHamburgerDrawerMenuOpen(!hamburgerDrawerMenuOpen);
    };

    const handleDrawerClose = () => {
        setHamburgerDrawerMenuOpen(false);
    };

	return (
		<div className="header-hamburger-container">
			<IconButton className="hamburger" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
                <MenuIcon />
            </IconButton>
			<Drawer
                variant="temporary"
                anchor="right"
                open={hamburgerDrawerMenuOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true // Better open performance on mobile.
                }}>
                <Toolbar className="header-hamburger-toolbar-container">
                    <IconButton onClick={handleDrawerClose}>
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                
				<div className="hamburger-drawer-container">
					<ul className="hide-bullets">
						<a href="/">
							<li>Home</li>
						</a>

						<a href="/solutions">
							<li>Solutions</li>
						</a>
						
						<a href="/about">
							<li>About</li>
						</a>

						<a href="/contact">
							<li>Contact</li>
						</a>

						<a href="/schedule-a-call">
							<li>
								<Button variant="outlined">Book a chat</Button>
							</li>
						</a>
					</ul>
				</div>
            </Drawer>
		</div>
	);
}

export default Hamburger;