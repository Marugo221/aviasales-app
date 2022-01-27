import React from 'react';
import classes from './tickets-all.module.scss';

const NoTicketsMessage = () => (
    <div className={classes.noTicketsMessage}>
      <span>Рейсов, подходящих под заданный фильтр, не найдено.</span>
    </div>
  );

export default NoTicketsMessage;
