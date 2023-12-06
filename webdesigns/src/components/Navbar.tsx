'use client'
import { gsap } from 'gsap'
import { useEffect, useState, useRef } from 'react'

export default function Navbar() {

	const [iniciar, setIniciar] = useState(true);
	const navContainerRef = useRef(null);

	useEffect(() => {
	  const tl = gsap.timeline({ paused: true });
  
	  const animateOpenNav = () => {
		tl.to('#nav-container', 0.2, {
		  autoAlpha: 1,
		  delay: 0.1,
		});
  
		tl.to('.site-logo', 0.2, {
		  color: '#fff',
		}, '-=0.1');
	  };
  
	  tl.from('.flex > div', {
		opacity: 0,
		y: 10,
		stagger: {
		  amount: 0.04,
		},
	  });
  
	  tl.to(
		'.nav-link > a',
		{
		  top: 0,
		  ease: 'power2.inOut',
		  stagger: {
			amount: 0.1,
		  },
		},
		'-=0.4',
	  );
  
	  tl.from(
		'.nav-footer',
		{
		  opacity: 0,
		},
		'-=0.5',
	  ).reverse();
  
	  const openNav = () => {
		animateOpenNav();
		const navBtn = document.getElementById('menu-toggle-btn');
  
		if (navBtn) {
		  navBtn.onclick = function (e) {
			navBtn.classList.toggle('active', iniciar);
			setIniciar(!iniciar);
			tl.reversed(!iniciar);
		  };
		}
	  };
  
	  openNav();
	}, [iniciar]);

	return (
		<>
			<div className="container">
				<div className="navbar">
					<div className="site-logo">Plastic</div>
					<div className="menu-toggle">
						<div id="menu-toggle-btn">
							<span></span>
						</div>
					</div>
				</div>
				<div className="header">
					We transform <br />
					ideas into digital <br /> outcomes
				</div>
				<div id="nav-container" ref={navContainerRef}>
					<div className="nav">
						<div className="col flex">
							<div className="nav-logo">c/</div>
							<div className="nav-socials">
								<a href="#">Behance</a>
								<a href="#">Twitter</a>
								<a href="#">Instagram</a>
								<a href="#">Linkedin</a>
								<a href="#">Medium</a>
							</div>
						</div>
						<div className="col">
							<div className="nav-link">
								<a href="#">Work</a>
								<div className="nav-item-wrapper"></div>
							</div>
							<div className="nav-link">
								<a href="#">Services</a>
								<div className="nav-item-wrapper"></div>
							</div>
							<div className="nav-link">
								<a href="#">About</a>
								<div className="nav-item-wrapper"></div>
							</div>
							<div className="nav-link">
								<a href="#">Manifesto</a>
								<div className="nav-item-wrapper"></div>
							</div>
							<div className="nav-link">
								<a href="#">Constact</a>
								<div className="nav-item-wrapper"></div>
							</div>
						</div>
					</div>
					<div className="nav-footer">
						<div className="links">
							<a href="#">Privacy Policy</a>
							<a href="#">Cookie Policy</a>
							<a href="#">Terms and Conditions</a>
						</div>
						<div className="contact">
							<a href="#">juanpymos@gmail.com</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
