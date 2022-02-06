import React from 'react';
import Form from '../components/Form';
import Filter from '../components/Filter';
import ContactsList from '../components/ContactList/ContactList';

export default function Contacts() {
  return (
    <div>
      <Form />
      <Filter />
      <ContactsList />
    </div>
  );
}
