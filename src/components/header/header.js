// import React from 'react';
// import Grid from '@mui/material/Grid';
// import Hidden from '@mui/material/Hidden';
// import { Logo, DesktopMenu, HeaderButtons, Hamburger } from './@components';
// import './header.scss';
//
//
// function Header() {
// 	return (
// 		<div className="header-container">
// 			<div className="container">
// 				<Grid container className="grid-container">
// 					<Grid item xs={6} md={3}>
// 						<Logo />
//                     </Grid>
// 					<Hidden mdDown>
//                         <Grid item md={6}>
//                             <DesktopMenu />
//                         </Grid>
//                     </Hidden>
//                     <Hidden mdDown>
//                         <Grid item xs={3}>
//                             <HeaderButtons />
//                         </Grid>
//                     </Hidden>
// 					<Hidden mdUp>
// 						<Grid item xs={6}>
// 							<Hamburger />
// 						</Grid>
// 					</Hidden>
// 				</Grid>
//
// 				<noscript>
//                     <div className="js_disabled-hidden">
//                         <DesktopMenu />
//                     </div>
//                 </noscript>
// 			</div>
// 		</div>
// 	);
// }
//
// export default Header;