import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import { useEffect } from 'react';
import s from './ContactList.module.css';

export default function ContactsList() {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const loaderContacts = useSelector(contactsSelectors.isLoadingContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(contactsOperations.deleteContact(id));
  };

  return (
    <>
      {loaderContacts && <h1>Loading...</h1>}
      {contacts.length === 0 && <div> No contacts </div>}
      {contacts.length > 0 && (
        <ul className={s.contactList}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={s.item}>
              {name}: {number}
              <button
                className={s.button}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
ContactsList.defaultProps = {
  contacts: [],
};

ContactsList.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.array.isRequired,
};
