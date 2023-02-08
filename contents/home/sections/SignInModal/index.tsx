import { login, openSignUpModal } from '@/contents/auth/authSlice';
import { useAppDispatch } from '@/store/hooks';
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { signInSchema } from './Validate';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'common.white',
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

interface ILoginModal {
  isOpen: any;
  CloseModal: any;
}

interface ILogin {
  email: string;
  password: string;
  remember: boolean;
}

const SignInModal = ({ isOpen, CloseModal }: ILoginModal) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleLoginClick = () => {
    dispatch(
      login({
        username: '',
        password: '',
      })
    );
  };

  const onSubmit = (values: any) => {
    console.log('values', values);
  };

  const initialValues: ILogin = {
    email: '',
    password: '',
    remember: false,
  };

  return (
    <Modal open={isOpen} onClose={CloseModal}>
      <Box sx={style}>
        <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
          Log in
        </Typography>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validateOnBlur={false}
          validationSchema={signInSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, isSubmitting, setFieldValue, values }) => (
            <Form className={`h-100`}>
              <FormControl sx={{ mb: 3, mt: 1 }} fullWidth>
                <Field as={TextField} id="email" name="email" label="Email" variant="outlined" />
              </FormControl>
              <FormControl sx={{ mb: 2 }} fullWidth>
                <Field
                  as={TextField}
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button onClick={() => setShowPassword(!showPassword)} color="secondary">
                          {showPassword ? 'Hide' : 'Show'}
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, px: 2 }}>
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ textAlign: 'center' }}
                  color="primary.light"
                >
                  By logging in, you agree to our Privacy Policy and Terms of Service
                </Typography>
              </Box>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                size="large"
                fullWidth
                onClick={onSubmit}
              >
                Sign in
              </Button>
              <Grid container alignItems="center" justifyContent="space-between" sx={{ mt: 1 }}>
                <Box>
                  <Field as={Checkbox} name="remember" />
                  <Typography variant="caption">Remember me</Typography>
                </Box>
                <Link variant="caption" underline="none" href="#" color="warning.light">
                  Forgot password?
                </Link>
              </Grid>
              <Grid>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography variant="body1" component="span">
                    Need an account?
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    color="warning.light"
                    onClick={() => dispatch(openSignUpModal())}
                    sx={{ cursor: 'pointer' }}
                  >
                    &nbsp;Sign up now.
                  </Typography>
                </Box>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default SignInModal;
