// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaHome, FaList, FaCalendar, FaCreditCard, FaShoppingBag } from 'react-icons/fa';

// const Sidebar = () => {
//   const [activeItem, setActiveItem] = useState('home');

//   return (
//     <div className="d-flex flex-column bg-dark text-white  p-3">
//       <a
//         href="/"
//         className={`mb-4 ${activeItem === 'home' ? 'active' : ''}`}
//         onClick={() => setActiveItem('home')}
//       >
//         <FaHome className={` ${activeItem === 'home' ? 'active-icon' : ''}`} size={24} />
//       </a>
//       <a
//         href="/list"
//         className={`mb-4 ${activeItem === 'list' ? 'active' : ''}`}
//         onClick={() => setActiveItem('list')}
//       >
//         <FaList className={`text-white ${activeItem === 'list' ? 'active-icon' : ''}`} size={24} />
//       </a>
//       <a
//         href="/calendar"
//         className={`mb-4 ${activeItem === 'calendar' ? 'active' : ''}`}
//         onClick={() => setActiveItem('calendar')}
//       >
//         <FaCalendar className={`text-white ${activeItem === 'calendar' ? 'active-icon' : ''}`} size={24} />
//       </a>
//       <a
//         href="/credit-card"
//         className={`mb-4 ${activeItem === 'credit-card' ? 'active' : ''}`}
//         onClick={() => setActiveItem('credit-card')}
//       >
//         <FaCreditCard className={`text-white ${activeItem === 'credit-card' ? 'active-icon' : ''}`} size={24} />
//       </a>
//       <a
//         href="/shopping-bag"
//         className={`mb-4 ${activeItem === 'shopping-bag' ? 'active' : ''}`}
//         onClick={() => setActiveItem('shopping-bag')}
//       >
//         <FaShoppingBag className={`text-white ${activeItem === 'shopping-bag' ? 'active-icon' : ''}`} size={24} />
//       </a>
//     </div>
//   );
// };

// export default Sidebar;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaList, FaCalendar, FaCreditCard, FaShoppingBag, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Toggle Button */}
      <button
        className={`btn btn-dark ${isSidebarOpen ? 'd-none' : 'd-block'} d-lg-none`}
        onClick={handleToggleSidebar}
      >
        <FaBars size={24} />
      </button>

      <div className={`d-flex flex-column bg-dark text-white p-3 ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'} d-lg-flex`}>
        <a
          href="/"
          className={`mb-4 ${activeItem === 'home' ? 'active' : ''}`}
          onClick={() => setActiveItem('home')}
        >
          <FaHome className={`${activeItem === 'home' ? 'active-icon' : ''}`} size={24} />
        </a>
        <a
          href="/list"
          className={`mb-4 ${activeItem === 'list' ? 'active' : ''}`}
          onClick={() => setActiveItem('list')}
        >
          <FaList className={`text-white ${activeItem === 'list' ? 'active-icon' : ''}`} size={24} />
        </a>
        <a
          href="/calendar"
          className={`mb-4 ${activeItem === 'calendar' ? 'active' : ''}`}
          onClick={() => setActiveItem('calendar')}
        >
          <FaCalendar className={`text-white ${activeItem === 'calendar' ? 'active-icon' : ''}`} size={24} />
        </a>
        <a
          href="/credit-card"
          className={`mb-4 ${activeItem === 'credit-card' ? 'active' : ''}`}
          onClick={() => setActiveItem('credit-card')}
        >
          <FaCreditCard className={`text-white ${activeItem === 'credit-card' ? 'active-icon' : ''}`} size={24} />
        </a>
        <a
          href="/shopping-bag"
          className={`mb-4 ${activeItem === 'shopping-bag' ? 'active' : ''}`}
          onClick={() => setActiveItem('shopping-bag')}
        >
          <FaShoppingBag className={`text-white ${activeItem === 'shopping-bag' ? 'active-icon' : ''}`} size={24} />
        </a>
      </div>
    </>
  );
};

export default Sidebar;
