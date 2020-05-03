import React, {Component} from 'react';
import {Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';


class Cards extends Component {
    //console.log(props);
    render(props) {
        return (
            <div className={styles.container}>
                <h1>Cards</h1>
            </div>
        );
    }
}

export default Cards;
