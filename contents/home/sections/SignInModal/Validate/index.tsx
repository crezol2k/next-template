import * as Yup from 'yup';

export const signInSchema = () =>
  Yup.object().shape({
    email: Yup.string().email('Sai định dạng').required('Bắt buộc'),
    password: Yup.string().required('Bắt buộc'),
  });
