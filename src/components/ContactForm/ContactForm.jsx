import { Component } from "react";
import PropTypes from 'prop-types';

import styles from "./ContactForm.module.css"

const STATE_INIT = {
    name: '',
    number: '',
};

export default class ContactForm extends Component {
    state = STATE_INIT;

    handleChange = ({target}) => {
        this.setState({
            [target.name]: target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state);

        this.handleFormReset(event.target);
    }

    handleFormReset = (form) => {
        this.setState(STATE_INIT);
        
        form.elements.submit.blur();
    }

    render() {
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <label htmlFor="name" className={styles.label}>Name</label>

                <input
                    type="text"
                    id="name"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    className={styles.input}
                    onChange={this.handleChange}
                    value={this.state.name}
                />

                <label htmlFor="number" className={styles.label}>Number</label>

                <input
                    type="tel"
                    id="number"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    className={styles.input}
                    onChange={this.handleChange}
                    value={this.state.number}
                />

                <button type="submit" name="submit" className={styles.button}>Add contact</button>
            </form>
        );
    };
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}