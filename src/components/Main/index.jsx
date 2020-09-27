import React from 'react';
import Header from './Header';
import Menu from './Menu';

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Menu />
            </div>
        )
    }
}

export default MainPage;
