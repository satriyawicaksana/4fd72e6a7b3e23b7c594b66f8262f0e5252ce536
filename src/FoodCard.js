import React from 'react';
import './FoodCard.css';
export default class FoodCard extends React.Component {
    render() {
        return (
            <div className="food-card">
                <div className="food-picture"></div>
                <div className="food-content">
                    <div className="rating-container">
                        <p>3.5 </p>
                        <div>
                            <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 16.8 6.36 4.6285714-2.4342857-7.4742857 6.36-4.52571427h-7.8l-2.4857143-7.71428572-2.48571429 7.71428572h-7.8l6.36 4.52571427-2.43428571 7.4742857z" ></path></svg>
                            <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 16.8 6.36 4.6285714-2.4342857-7.4742857 6.36-4.52571427h-7.8l-2.4857143-7.71428572-2.48571429 7.71428572h-7.8l6.36 4.52571427-2.43428571 7.4742857z" ></path></svg>
                            <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 16.8 6.36 4.6285714-2.4342857-7.4742857 6.36-4.52571427h-7.8l-2.4857143-7.71428572-2.48571429 7.71428572h-7.8l6.36 4.52571427-2.43428571 7.4742857z" ></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></svg>
                        </div>
                    </div>
                    <div>
                        <h3>Roasted Chicken with Scramble Egg</h3>
                        <p>by <span>Kulina</span> &bull; <span>Uptown Lunch</span></p>
                    </div>
                    <div className="price-container">
                        <p>Rp <span>35,000</span></p>
                        <button onClick={this.props.addToCart}>
                            <p>ADD </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}