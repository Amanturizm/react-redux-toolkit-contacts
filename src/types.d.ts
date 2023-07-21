interface IContact {
  id: string;
  name: string;
  photo: string;
}

interface IContactMutation extends IContact {
  phone: string;
  email: string;
}

type TContactApi = Omit<IContactMutation, 'id'>;

interface IContactApi {
  [id: string]: TContactApi;
}