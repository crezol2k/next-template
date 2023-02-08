import Layout from '@/components/layouts';
import ProductHero from '@/components/share/ProductHero';
import { closeSignInModal, closeSignUpModal } from '@/contents/auth/authSlice';
import SignInModal from '@/contents/home/sections/SignInModal';
import SignUpModal from '@/contents/home/sections/SignUpModal';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

const HomePage = () => {
  const modalSignIn = useAppSelector((state) => state.auth.modalSignIn);
  const modalSignUp = useAppSelector((state) => state.auth.modalSignUp);
  const dispatch = useAppDispatch();

  return (
    <>
      <ProductHero />
      <SignInModal isOpen={modalSignIn.isOpen} CloseModal={() => dispatch(closeSignInModal())} />
      <SignUpModal isOpen={modalSignUp.isOpen} CloseModal={() => dispatch(closeSignUpModal())} />
    </>
  );
};

HomePage.getInitialProps = async (ctx: any) => {
  return {};
};
export default HomePage;
HomePage.Layout = Layout;
