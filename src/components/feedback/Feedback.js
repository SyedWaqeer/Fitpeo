// import React from "react";
// import './Feedback.css';
// import Customer1 from '../../assets/customer1.jpg'
// import Customer2 from '../../assets/customer2.jpg'
// import Customer3 from '../../assets/customer3.jpg'
// import { FaStar } from 'react-icons/fa';
// const Feedback = () => {
//     const feedbackItems = [
//         {
//             name: 'Jenny Wilson',
//             feedback: 'The food was excellent and so was the service. I had the mushroom risotto with truffles which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
//             stars: 4,
//             avatar: `${Customer3}`,
//         },
//         {
//             name: 'Dianne Russell',
//             feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
//             stars: 5,
//             avatar: `${Customer1}`,
//         },
//         {
//             name: 'Devon Lane',
//             feedback: 'Normally value are worse, but think, on lease menses and twelve and others and has the ten us and is and because can ten volumes in ours was house will.',
//             stars: 3,
//             avatar: `${Customer2}`,
//         },
//     ];
//     return (
//         <div className="card bg-dark text-light p-3 scrollable" >
//             <h5>Customer's Feedback</h5>
//             <ul className="list-group list-group-flush">
//                 {feedbackItems.map((item, index) => (
//                     <li key={index} className="list-group-item bg-dark text-light">
//                         <div className="d-flex align-items-center mb-2">
//                             <img src={item.avatar} alt="avatar" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
//                             <div>
//                                 <h6 className="mb-0">{item.name}</h6>
//                                 <div className="text-warning">
//                                     {[...Array(item.stars)].map((star, i) => (
//                                         <FaStar key={i} />
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                         <p className="mb-1">{item.feedback}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// export default Feedback;

import React from "react";
import './Feedback.css';
import Customer1 from '../../assets/customer1.jpg'
import Customer2 from '../../assets/customer2.jpg'
import Customer3 from '../../assets/customer3.jpg'
import { FaStar } from 'react-icons/fa';

const Feedback = () => {
    const feedbackItems = [
        {
            name: 'Jenny Wilson',
            feedback: 'The food was excellent and so was the service. I had the mushroom risotto with truffles which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
            stars: 4,
            avatar: Customer3,
        },
        {
            name: 'Dianne Russell',
            feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
            stars: 5,
            avatar: Customer1,
        },
        {
            name: 'Devon Lane',
            feedback: 'Normally value are worse, but think, on lease menses and twelve and others and has the ten us and is and because can ten volumes in ours was house will.',
            stars: 3,
            avatar: Customer2,
        },
    ];

    return (
        <div className="card bg-dark text-light p-3 scrollable">
            <h5 className="mb-3">Customer's Feedback</h5>
            <ul className="list-group list-group-flush">
                {feedbackItems.map((item, index) => (
                    <li key={index} className="list-group-item bg-dark text-light">
                        <div className="d-flex align-items-start mb-2">
                            <img src={item.avatar} alt="avatar" className="rounded-circle me-2 avatar" />
                            <div>
                                <h6 className="mb-1">{item.name}</h6>
                                <div className="text-warning">
                                    {[...Array(item.stars)].map((star, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="mb-1 feedback-text">{item.feedback}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Feedback;
