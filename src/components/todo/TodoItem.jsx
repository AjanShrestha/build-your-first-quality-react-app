import React from 'react';
import PropTypes from 'prop-types';
import { partial } from '../../lib/utils';

export const TodoItem = (props) => {
    const handleToggle = partial(props.handleToggle, props.id);
    const handleRemove = partial(props.handleRemove, props.id);
    return (
        <li>
            <span className="delete-item">
                <a href="#" onClick={handleRemove}>x</a>
            </span>
            <input
                type="checkbox"
                checked={props.isComplete}
                onChange={handleToggle}
            /> {props.name}
        </li>
    );
};

TodoItem.propTypes = {
    name: PropTypes.string.isRequired,
    isComplete: PropTypes.bool,
    id: PropTypes.number.isRequired
}