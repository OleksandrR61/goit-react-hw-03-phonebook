import PropTypes from 'prop-types';

import styles from './ContactElement.module.css';

export const ContactElement = ({contact, onHandleDelete}) => (
    <>{contact.name}: {contact.number} <button type="button" className={styles.button} onClick={onHandleDelete} id={contact.id}>Delete</button></>
);

ContactElement.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
    onHandleDelete: PropTypes.func.isRequired,
};