import { openSignInModal } from '@/contents/auth/authSlice';
import { useAppDispatch } from '@/store/hooks';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { signUpSchema } from './Validate';
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

interface ISignModal {
  isOpen: any;
  CloseModal: any;
}

interface ISignUp {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
}
const SignUpModal = ({ isOpen, CloseModal }: ISignModal) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleLoginClick = () => {};

  const initialValues: ISignUp = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  };

  const onSubmit = (values?: any) => {
    try {
      console.log(values);
    } catch {}
  };

  return (
    <Modal open={isOpen} onClose={CloseModal}>
      <Box sx={style}>
        <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
          Sign up
        </Typography>
        <Grid sx={{ mb: 2 }}>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validateOnBlur={false}
            validationSchema={signUpSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched, isSubmitting, setFieldValue, values }) => (
              <Form className={`h-100`}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={6}>
                    <FormControl sx={{ mb: 2 }} fullWidth>
                      <Field
                        as={TextField}
                        id="first_name"
                        name="first_name"
                        label="First name"
                        variant="outlined"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl sx={{ mb: 2 }} fullWidth>
                      <Field
                        as={TextField}
                        id="last_name"
                        name="last_name"
                        label="Last name"
                        variant="outlined"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl sx={{ mb: 2 }} fullWidth>
                      <Field
                        as={TextField}
                        id="email"
                        name="email"
                        label="Email"
                        variant="outlined"
                      />
                    </FormControl>
                    <FormControl sx={{ mb: 2 }} fullWidth>
                      <Field
                        as={TextField}
                        id="password"
                        name="Password"
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        variant="outlined"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Button
                                onClick={() => setShowPassword(!showPassword)}
                                color="secondary"
                              >
                                {showPassword ? 'Hide' : 'Show'}
                              </Button>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </FormControl>
                    <FormControl sx={{ mb: 2 }} fullWidth>
                      <Field
                        as={TextField}
                        id="confirm_password"
                        name="confirm_password"
                        type={showConfirmPassword ? 'text' : 'password'}
                        label="Confirm Password"
                        variant="outlined"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Button
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                color="secondary"
                              >
                                {showConfirmPassword ? 'Hide' : 'Show'}
                              </Button>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                    <Typography variant="body1" component="span">
                      Already have an account?
                    </Typography>
                    <Typography
                      variant="body1"
                      component="span"
                      color="warning.light"
                      onClick={() => dispatch(openSignInModal())}
                      sx={{ cursor: 'pointer' }}
                    >
                      &nbsp;Log in.
                    </Typography>
                  </Box>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, px: 2 }}>
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
                  Sign up
                </Button>
              </Form>
            )}
          </Formik>
        </Grid>
      </Box>
    </Modal>
  );
};

export default SignUpModal;
