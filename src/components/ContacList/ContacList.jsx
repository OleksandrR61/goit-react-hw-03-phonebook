import PropTypes from 'prop-types';

import { ContactElement, Notification } from "components/";

export const ContacList = ({contacts, filter, onHandleDelete}) => {
    const contactsForRender = filter
        ? contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        : contacts;
    let message = '';

    if (!contactsForRender.length && !filter) {
        message="Add your first contact please.";
    } else if (!contactsForRender.length && filter) {
        message="No contacts found for your request.";
    };

    return (
        contactsForRender.length
            ?    
                <>
                    <ul>
                        {contactsForRender.map(contact =>
                            <li key={contact.id}><ContactElement contact={contact} onHandleDelete={onHandleDelete} /></li>
                        )}
                    </ul>
                </>
            : <Notification message={message}/>
    );
};

ContacList.propTypes = {
    filter: PropTypes.string.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })).isRequired,
    onHandleDelete: PropTypes.func.isRequired,
};