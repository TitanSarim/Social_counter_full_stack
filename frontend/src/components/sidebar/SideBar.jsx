import React, { useEffect, useState } from 'react'
import {
	FaAngleRight,
	FaAngleLeft, 
	FaThLarge, 
	FaCog,
	FaSignOutAlt,
	FaBars,
	FaStreetView
} from 'react-icons/fa';
import QRCode from "react-qr-code";
import { Link, useNavigate } from 'react-router-dom';
import './SideBar.css'
import {userLogOut} from '../../actions/userAction'
import { useSelector, useDispatch } from "react-redux";
import { getLogo } from '../../actions/imageAction';
import store from "../../store";

import dummy from '../../assets/logo.png'

const SideBar = ({visible, show}) => {

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleLogout = () => {
		store.dispatch(userLogOut());
		navigate("\login")
	};

	const {user } = useSelector((state) => state.user);

	const {logo, loading} = useSelector(state=>state.logo);

	const [username, setUserName] = useState('')
	const [view, setView] = useState('')


    const ICON_SIZE = 20;

	const value = `http://localhost:3000/company/${username}/followup`;

	const handleUserViewOn = () => {
		const userViewObject = { userView: true };
		localStorage.setItem('userView', JSON.stringify(userViewObject));
		window.location.reload()
	}


	const handleUserViewOf = () => {
		const userViewObject = { userView: false };
		localStorage.setItem('userView', JSON.stringify(userViewObject));
		handleLogout()
	}

	useEffect(() =>{

		const userViewString = localStorage.getItem('userView');
		const userViewObject = JSON.parse(userViewString);
		const userView = userViewObject?.userView;
		setView(userView)

		// if(error){
		//   alert.error(error)
		//   dispatch(clearErrors());
		// }
  		setUserName(user?.username)
		dispatch(getLogo());
  
	}, [dispatch, user])

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
				{/* <button
					type="button"
					className="nav-btn"
					onClick={() => show(!visible)}
				>
					{ !visible
						? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
				</button> */}
				<div>
					<Link
						className="logo"
						to={`/company/${username}/dashboard`}
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
						<Link to={`/company/${username}/dashboard`} className="nav-link">
							<FaThLarge size={ICON_SIZE} />
							<span>Dashboard</span>
						</Link>
						{/* <Link to={`/${username}/followup`} className="nav-link">
                            <RiUserFollowFill size={ICON_SIZE} />
                            <span>Follows Page</span> 
					    </Link> */}

						{view === true ? "" : (
							<Link to="/company/settings" className="nav-link">
								<FaCog size={ICON_SIZE} />
								<span>Settings</span> 
							</Link>
						)}
						

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


						{view === true ? (
							<div className="links nav-ends">
								<Link className="nav-link" onClick={handleUserViewOf} >
									<FaSignOutAlt size={ICON_SIZE} />
									<span>Logout</span> 
								</Link>
							</div>
						) : (
							<div className="links nav-ends">
								<Link className="nav-link" onClick={handleUserViewOn} >
									<FaStreetView size={ICON_SIZE} />
									<span>User View</span> 
								</Link>
							</div>
						)}

						{view === true ?  "" : (
							<div className="links nav-ends">
								<Link className="nav-link" onClick={handleLogout}>
									<FaSignOutAlt size={ICON_SIZE} />
									<span>Logout</span> 
								</Link>
							</div>
						)}

					</div>

				</div>

			</nav>
		</>
  )
}

export default SideBar