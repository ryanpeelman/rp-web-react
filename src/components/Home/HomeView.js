import React from 'react';

export default class HomeViewContainer extends React.Component {
    render() {
        return (
            <div className="HomeView">            
                <div className="card">
                    This is Card One
                </div>
                <div className="card">
                    This is Card Two
                </div>
                <div className="card">
                    This is Card Three
                </div>
            </div>
        );
    }
}
