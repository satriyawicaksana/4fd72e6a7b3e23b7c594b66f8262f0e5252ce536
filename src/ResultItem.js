import React from 'react';
import './ResultItem.css';
export default class ResultItem extends React.Component {
    render() {
        return (
            <div className="result-wrapper">
                <div className="result-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 2C8.13 2 5 5.13 5 9c0 4.17 4.42 9.92 6.24 12.11.4.48 1.13.48 1.53 0C14.58 18.92 19 13.17 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                </div>
                <div className="result-address">
                    <p>{this.props.name}</p>
                    <p>{this.props.address}</p>
                </div>
            </div>
        );
    }
}