import React, { useState } from 'react';
import NewContactFormItem from "../../components/NewContactFormItem/NewContactFormItem";
import defaultImage from '../../assets/no-image.png';
import {useAppDispatch} from "../../app/hook";
import {createOne} from "../../store/Contacts/ContactsThunk";
import {useNavigate} from "react-router-dom";

type TContactForm = Omit<IContactMutation, 'id'>;

const initialState: TContactForm = {
  name: '',
  phone: '',
  email: '',
  photo: ''
}

const NewContactForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formInputs, setFormInputs] = useState<TContactForm>(initialState);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormInputs(prevState => ({ ...prevState, [name]: value }));
  };

  const sendData = (e: React.FormEvent) => {
    e.preventDefault();

    if (formInputs.name.length < 1) {
      alert('Введите имя!');
    } else if (formInputs.phone.length < 9) {
      alert('Введите номер!');
    } else {
      dispatch(createOne(formInputs));
      navigate('/');
    }
  };

  return (
    <form onSubmit={sendData} className="d-flex flex-column gap-3 w-50 m-5 ps-5">
      <NewContactFormItem label="Name: " name="name"
                          value={formInputs.name} changeValue={changeValue} />
      <NewContactFormItem label="Phone: " name="phone"
                          value={formInputs.phone} changeValue={changeValue}  />
      <NewContactFormItem label="Email: " name="email" type="email"
                          value={formInputs.email} changeValue={changeValue}  />
      <NewContactFormItem label="Photo: " name="photo"
                          value={formInputs.photo} changeValue={changeValue}  />

      <div className="d-flex gap-1">
        Photo preview: <img src={formInputs.photo || defaultImage} alt="img" className="w-25" />
      </div>

      <button className="btn btn-primary" style={{ width: 100 }}>Create</button>
    </form>
  );
};

export default NewContactForm;