import React, { useEffect, useState } from "react";
import "./Navbar.scss";

const Navbar = (props) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuClick = () => {
		setMenuOpen(!menuOpen);
	};

	const handleLinkClick = () => {
		setMenuOpen(false);
	};

	const styles = {
		container: {
			position: "absolute",
			top: 0,
			left: 0,
			zIndex: "99",
			opacity: 0.9,
			display: "flex",
			alignItems: "center",
			background: "black",
			width: "100%",
			color: "white",
			fontFamily: "Lobster",
		},
		logo: {
			margin: "0 auto",
		},
		body: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			width: "100vw",
			height: "100vh",
			filter: menuOpen ? "blur(2px)" : null,
			transition: "filter 0.5s ease",
		},
	};

	const menu = ["about", "photos", "videos", "press", "contact"];
	const menuItems = menu.map((value, index) => {
		return (
			<MenuItem
				key={index}
				delay={`${index * 0.1}s`}
				onClick={() => {
					handleLinkClick();
				}}
			>
				{value}
			</MenuItem>
		);
	});

	return (
		<div>
			<div style={styles.container}>
				<MenuButton
					open={menuOpen}
					onClick={() => {
						handleMenuClick();
					}}
					color="white"
				/>
				<div style={styles.logo}>Logo</div>
			</div>
			<Menu open={menuOpen}>{menuItems}</Menu>
			<div style={styles.body}></div>
		</div>
	);
};

const MenuItem = (props) => {
	const [hover, setHover] = useState(false);

	const handleHover = () => {
		setHover(!hover);
	};

	console.log(props);
	const styles = {
		container: {
			opacity: 0,
			animation: "1s appear forwards",
			animationDelay: props.delay,
		},
		menuItem: {
			fontFamily: `'Open Sans', sans-serif`,
			fontSize: "1.2rem",
			padding: "1rem 0",
			margin: "0 5%",
			cursor: "pointer",
			color: hover ? "gray" : "#fafafa",
			transition: "color 0.2s ease-in-out",
			animation: "0.5s slideIn forwards",
			animationDelay: props.delay,
		},
		line: {
			width: "90%",
			height: "1px",
			background: "gray",
			margin: "0 auto",
			animation: "0.5s shrink forwards",
			animationDelay: props.delay,
		},
	};

	return (
		<div styles={styles.container}>
			<div
				style={styles.menuItem}
				onMouseEnter={() => {
					handleHover();
				}}
				onMouseLeave={() => {
					handleHover();
				}}
				onClick={props.handleMenuClick}
			>
				{props.children}
			</div>
			<div style={styles.line}></div>
		</div>
	);
};

const Menu = (props) => {
	console.log("this is props passed down", props);
	const [open, setOpen] = useState(props.open ? props.open : false);

	const styles = {
		container: {
			position: "absolute",
			top: 0,
			left: 0,
			height: open ? "100%" : 0,
			width: "100vw",
			display: "flex",
			flexDirection: "column",
			background: "black",
			opacity: 0.95,
			color: "#fafafa",
			transition: "height 0.3s ease",
			zIndex: 2,
		},
		menuList: {
			paddingTop: "3rem",
		},
	};

	return (
		<div style={styles.container}>
			{open ? <div style={styles.menuList}>{props.children}</div> : null}{" "}
		</div>
	);
};

const MenuButton = (props) => {
	const [open, setOpen] = useState(props.open ? props.open : false);

	const [color, setColor] = useState(props.color ? props.color : "black");

	// useEffect(() => {
	// 	console.log("Test");
	// }, [props.open])
	// return

	//  useEffect( () => {
	//       console.log('counter updated');
	//   }, [props.counter])

	//   componentWillReceiveProps(nextProps) {
	//   if (nextProps.count !== this.props.count) {
	//     this.setState({
	//       count: nextProps.count > 100 ? 100 : nextProps.count
	//     });
	//   }
	// }

	// render() {
	//   return ( <
	//     div > {
	//       this.state.count
	//     } <
	//     /div>
	//   );
	// }

	const handleClick = () => {
		setOpen(!props.open);
	};

	const styles = {
		container: {
			height: "32px",
			width: "32px",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			cursor: "pointer",
			padding: "4px",
		},
		line: {
			height: "2px",
			width: "20px",
			background: color,
			transition: "all 0.2s ease",
		},
		lineTop: {
			transform: open ? "rotate(45deg)" : "none",
			transformOrigin: "top left",
			marginBottom: "5px",
		},
		lineMiddle: {
			opacity: open ? 0 : 1,
			transform: open ? "translateX(-16px)" : "none",
		},
		lineBottom: {
			transform: open ? "translateX(-1px) rotate(-45deg)" : "none",
			transformOrigin: "top left",
			marginTop: "5px",
		},
	};
	return (
		<div
			style={styles.container}
			onClick={
				props.onClick
					? props.onClick
					: () => {
							handleClick();
					  }
			}
		>
			<div style={{ ...styles.line, ...styles.lineTop }} />
			<div style={{ ...styles.line, ...styles.lineMiddle }} />
			<div style={{ ...styles.line, ...styles.lineBottom }} />
		</div>
	);
};

export default Navbar;
