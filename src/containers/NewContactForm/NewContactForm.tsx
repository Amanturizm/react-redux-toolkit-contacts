import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/hook";
import { createOne, editOne } from "../../store/Contacts/ContactsThunk";
import axiosApi from "../../axiosApi";
import NewContactFormItem from "../../components/NewContactFormItem/NewContactFormItem";
import defaultImage from '../../assets/no-image.png';

type TContactForm = Omit<IContactMutation, 'id'>;

const initialState: TContactForm = {
  name: '',
  phone: '',
  email: '',
  photo: ''
}

const NewContactForm: React.FC<{isEdit?: boolean}> = ({ isEdit }) => {
  const dispatch = useAppDispatch();

  const { id } = useParams() as { id: string };
  const navigate = useNavigate();

  const [formInputs, setFormInputs] = useState<TContactForm>(initialState);

  const fetchData = useCallback(async (id: string) => {
    try {
      const { data } = await axiosApi.get(`/contacts/${id}.json`);
      setFormInputs(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    if (isEdit) {
      void fetchData(id);
    }
  }, [isEdit, fetchData, id]);

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
      if (!isEdit) {
        dispatch(createOne(formInputs));
      } else {
        dispatch(editOne({ id, currentContact: formInputs }))
      }
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

      <button className="btn btn-primary" style={{ width: 100 }}>{isEdit ? 'Edit' : 'Create'}</button>
    </form>
  );
};

export default NewContactForm;