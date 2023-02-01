import { Component } from "react";
import { nanoid } from 'nanoid'

import { ContactForm, Filter, ContacList } from "components/";

export default class Phonebook extends Component {
    state = {
        contacts: [],
        filter: '',
    };

    componentDidMount() {
        if (JSON.parse(localStorage.getItem('contacts'))) {
            this.setState({
                contacts: JSON.parse(localStorage.getItem('contacts')),
                filter: '',
            })
        }
    }

    componentDidUpdate(_, prevState) {
        if (prevState.filter === this.state.filter) {
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        };
    };

    handleAddContacts = (newContact) => {
        const isNew = this.state.contacts.every(contact => contact.name !== newContact.name);
        if (isNew) {
            this.setState((prevState) => {
                return {
                    contacts: [...prevState.contacts, {
                        ...newContact,
                        id: nanoid(),
                    }],
                };
            });
        } else {
            alert(`${newContact.name} is already in contacts.`);
        };
    };

    handleSetFilter = ({target}) => {
        this.setState({
            filter: target.value,
        });
    };

    handleDelete = ({target}) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter(contact => contact.id !== target.id),
        }));
    }

    render() {
        return (
        <>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={this.handleAddContacts}/>

            <h2>Contacts</h2>
            <Filter onChange={this.handleSetFilter} value={this.state.filter}/>
            <ContacList contacts={this.state.contacts} filter={this.state.filter} onHandleDelete={this.handleDelete}/>
        </>
        );
    }
}