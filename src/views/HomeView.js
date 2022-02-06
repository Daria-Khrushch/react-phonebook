import React from 'react';
import s from './Form.module.css';

export default function HomeView() {
  return (
    <div className={s.formWrap}>
      <h1 className={s.title}>Welcome! </h1>
      <p>To work with the phone book, please Log in or Register</p>
    </div>
  );
}
