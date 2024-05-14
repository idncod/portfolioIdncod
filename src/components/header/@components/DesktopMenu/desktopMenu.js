import './desktopMenu.scss';

function DesktopMenu() {
	return (
		<div className="header-desktop-menu-container">
			<div className="item"><a href="/">Home</a></div>
			<div className="item"><a href="/solutions">Solutions</a></div>
			<div className="item"><a href="/about">About</a></div>
			<div className="item"><a href="/contact">Contact</a></div>
		</div>
	);
}

export default DesktopMenu;