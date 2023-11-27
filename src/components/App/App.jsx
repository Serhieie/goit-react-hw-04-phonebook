import React, { useState } from 'react';
import { TbUserSearch } from 'react-icons/tb';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactTable } from 'components/ContactTable/ContactTable';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import normalizePhoneNumber from '../../helpers/numberNormalize';

export function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number: normalizePhoneNumber(number),
    };
    setContacts(contacts => [contact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <div
      className="
      flex gap-4 justify-around mx-auto w-9/12 mt-10 p-8
      rounded shadow-xl shadow-shadowBox md:flex-col
      md:items-center md:text-base md:py-6 md:px-1.5 md:w-11/12
      text-xl text-darkFont min-h-562 select-none 
      bg-gradient-to-tr from-gradientColor1 to-gradientColor2"
    >
      <ContactForm contacts={contacts} onSubmit={addContact} />
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
        <Filter forFilter={filter} onChange={setFilter} />
        <ContactTable
          getVisibleContacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    </div>
  );
}
