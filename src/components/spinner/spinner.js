
import React from 'react';
import classes from './spinner.module.scss';

const Spinner = () => (
    <div className={classes['loader-wrap']}>
        Загрузка билетов...
        <div className={classes['lds-ellipsis']}>
            <div />
            <div />
            <div />
        </div>
    </div>
);

export default Spinner;