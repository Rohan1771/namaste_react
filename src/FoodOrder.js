import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/FoodOrderSite/Header';
import Body from '../components/FoodOrderSite/Body';
// - Header
//     - Logo
//     - Nav Items
// - Body
//     - Search Bar
//     - Restaurant Container
//     - Restaurant Cards
// - Footer
//     - Copyright
//     - Links
//     - Address
//     - Contact

const AppLayout = () => {
    return (
        <div className="app">
            {/* // - Header */}
            <Header />
            {/* // - Body */}
            <Body />
            {/* // - Footer
            <Footer /> */}
        </div>
    )
    
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />)