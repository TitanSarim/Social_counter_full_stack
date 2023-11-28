import React, { useEffect } from 'react'
import {
	FaAngleRight,
	FaAngleLeft, 
	FaChartBar, 
	FaThLarge, 
	FaShoppingCart, 
	FaCog,
	FaSignOutAlt,
	FaBars
} from 'react-icons/fa';
import QRCode from "react-qr-code";
import { Link } from 'react-router-dom';
import './SideBar.css'
import {userLogOut} from '../../actions/userAction'
import { useSelector, useDispatch } from "react-redux";
import { getLogo } from '../../actions/imageAction';
import store from "../../store";

import dummy from '../../assets/logo.png'

const SideBar = ({visible, show}) => {

	const dispatch = useDispatch()

	const handleLogout = () => {
		store.dispatch(userLogOut());
	};

	const {logo, loading} = useSelector(state=>state.logo);

    const ICON_SIZE = 20;

	const value = 'https://www.linkedin.com/in/muhammad-sarim-679576212/'

	useEffect(() =>{

		// if(error){
		//   alert.error(error)
		//   dispatch(clearErrors());
		// }
  
		dispatch(getLogo());
  
	}, [dispatch])


  return (
    <>
			<div className="mobile-nav">
				<button
					className="mobile-nav-btn"
					onClick={() => show(!visible)}
				>
					<FaBars size={24}  />
				</button>
			</div>
			<nav className={!visible ? 'navbar' : ''}>
				<button
					type="button"
					className="nav-btn"
					onClick={() => show(!visible)}
				>
					{ !visible
						? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
				</button>
				<div>
					<Link
						className="logo"
						to="/"
					>
							{logo?.logo?.success === false ? 
								<img
									src={dummy}
									alt="logo"
								/>:
								<img
									src={logo?.logo?.icon}
									alt="logo"
								/>
							}
					</Link>

                    <div className='breaker'>
                        <hr/>
                    </div>

					<div className="links nav-top">
						<Link to="/" className="nav-link">
							<FaThLarge size={ICON_SIZE} />
							<span>Dashboard</span>
						</Link>
						<Link to="/settings" className="nav-link">
                            <FaCog size={ICON_SIZE} />
                            <span>Settings</span> 
					    </Link>


						<div>
							<div style={{ height: "auto", margin: "30px auto", maxWidth: 150, width: "100%" }}>
								<QRCode
									size={256}
									style={{ height: "auto", maxWidth: "100%", width: "100%" }}
									value={value}
									viewBox={`0 0 256 256`}
								/>
							</div>
							<div className='nav-total-counter'>
								<p>Total count</p>
								<span>56,789</span>
							</div>
							<div className='nav-site-url'>
								<p>Screencounter.com</p>
							</div>
						</div>

						<div className="links nav-ends">
							<Link className="nav-link" onClick={handleLogout}>
								<FaSignOutAlt size={ICON_SIZE} />
								<span>Logout</span> 
							</Link>
						</div>

					</div>

				</div>

			</nav>
		</>
  )
}

export default SideBar