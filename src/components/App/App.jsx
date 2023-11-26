import React, { Component } from 'react';
import { TbUserSearch } from 'react-icons/tb';
import ContactForm from 'components/ContactForm';
import ContactTable from 'components/ContactTable';
import Filter from 'components/Filter';
import { nanoid } from 'nanoid';
import normalizePhoneNumber from '../../helpers/numberNormalize';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number: normalizePhoneNumber(number),
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div
        className="
      flex gap-4 justify-around mx-auto w-9/12 mt-10 p-8
      rounded shadow-xl shadow-shadowBox md:flex-col
      md:items-center md:text-base md:py-6 md:px-1.5 md:w-11/12
      text-xl text-darkFont min-h-562 select-none 
      bg-gradient-to-tr from-gradientColor1 to-gradientColor2"
      >
        <ContactForm
          contacts={this.state.contacts}
          onSubmit={this.addContact}
        />
        <div
          className="w-8/12 flex justify-center items-center 
        flex-col px-5 pr-4 rounded-sm shadow-lg shadow-shadowBox
        min-h-562 select-none bg-gradient-to-tr from-smallWraperGradient1
        to-smallWraperGradient2 relative md:mt-5 md:py-7 md:px-5
        md:w-11/12"
        >
          <TbUserSearch
            className="absolute  w-4 h-4 top-9 left-1/3
          opacity-40 z-10 text-filterPlaceholderColor md:w-5 md:h-5 
          md:top-16 md:left-1/4 md2:max-w-sm md2:top-9 md2:left-1/5 ssm:hidden"
          />
          <Filter forFilter={filter} onChange={this.changeFilter} />
          <ContactTable
            getVisibleContacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}
