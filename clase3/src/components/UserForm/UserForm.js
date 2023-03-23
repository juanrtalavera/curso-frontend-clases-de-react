import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserForm.module.css';

const UserForm = (userData,handleChangeData) => (
  <form>
  <fieldset>
    <legend>Nombre</legend>
    <input name='name' defaultvalue={userData.name} onChange={handleChangeData} placeholder='escribe tu nombre'></input>
  </fieldset>
  <fieldset>
    <legend>Apellidos</legend>
    <input name='surname' defaultvalue={userData.surname} onChange={handleChangeData} placeholder='escribe tus apellidos'></input>
  </fieldset>
  <fieldset>
    <legend>Email</legend>
    <input  defaultvalue={userData.email} onChange={handleChangeData} placeholder='escribe tu email'></input>
  </fieldset>
  <fieldset>
    <legend>Foto</legend>
    <input defaultvalue={userData.photo} onChange={handleChangeData} placeholder='adjunta una URL con tu foto'></input>
  </fieldset>
</form>
);

UserForm.propTypes = {};

UserForm.defaultProps = {};

export default UserForm;
