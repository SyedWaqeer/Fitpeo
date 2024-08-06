import React from 'react';
import './Dashboard.css';
import Feedback from '../components/feedback/Feedback.js';
import Table from '../components/table/Table.js';
import ActivityChart from '../components/activityChart/ActivityChart';
import { Card, ProgressBar } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaBox, FaShoppingBag, FaTimesCircle, FaDollarSign, FaEye, FaUtensils, FaBook, FaStar, FaCheck } from 'react-icons/fa';
const Dashboard = () => {
    const cardsData = [
        { title: 'Total Orders', value: 75, icon: <FaBox />, change: '+3%', changeClass: 'text-success', color: 'red', profitcolor: 'green' },
        { title: 'Total Delivered', value: 70, icon: <FaShoppingBag />, change: '-3%', changeClass: 'text-danger', color: 'blue', profitcolor: 'red' },
        { title: 'Total Cancelled', value: 5, icon: <FaTimesCircle />, change: '+3%', changeClass: 'text-success', color: 'green', profitcolor: 'green' },
        { title: 'Total Revenue', value: 12, icon: <FaDollarSign />, change: '-3%', changeClass: 'text-danger', color: 'yellow', profitcolor: 'red' },
    ];
    const menuItems = [
        { text: 'Goals', icon: <FaEye /> },
        { text: 'Popular Dishes', icon: <FaUtensils /> },
        { text: 'Menus', icon: <FaBook /> },
    ];
  
    const percentage = 66;
    return (
        <div className='dashboard'>
            <div className='main_container'>
                <h5 className='heading'>Dashboard</h5>
                <div className="wrapper">
                     {/* cards     container            */}
                    <div className="one row rowgap">
                        {cardsData.map((card, index) => (
                            <div key={index} className="col-md-3">
                                <div className="card bg-dark text-white ">
                                    <div className="card-body">
                                        <div className="">
                                            <div className={`icon-container ${card.color}`}>
                                                <FaShoppingBag className="icon" />
                                                <div className={`icon-badge ${card.color}`}>
                                                    {card.icon}
                                                </div>
                                            </div>
                                            <p >{card.title}</p>
                                            <div className="inline-container">
                                                <h2>{card.value}</h2>
                                                <p className={`profit ${card.profitcolor}`}>{card.change}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
         {/* Total Profit Container            */}
                    <div className="two">
                        <Card className="text-white bg-dark ">
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p>Net Profit</p>
                                        <h2 className='align-items-center'>
                                            $ 6759.25
                                        </h2>
                                    </div>
                                    <div style={{ width: 140, height: 135 }}>
                                        <CircularProgressbar value={percentage}
                                            text={`${percentage}%`}
                                            strokeWidth={5} />
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* Charts Container            */}
                    <div className="three"> 
                    <ActivityChart />
                    </div>
                    {/* Select Container            */}
                    <div className="four">
                        <div className="">
                            <ul className="list-group list">
                                {menuItems.map((item, index) => (
                                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center bg-dark border-0 listli">
                                        <div className="d-flex align-items-center">
                                            <div className="me-3">{item.icon}</div>
                                            {item.text}
                                        </div>
                                        <span className="badge  rounded-pill">{'>'}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Table   Container            */}
                    <div className="five">
                        <Table />
                    </div>
                    {/* Feedback Container            */}
                    <div className="six">
                   <Feedback/>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Dashboard;
