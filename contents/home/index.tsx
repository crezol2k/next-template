import Navbar from '@/components/layouts/Navbar';
import ProductHero from '@/components/share/ProductHero';
import { useHomeControler } from './controller';

export default function HomePage() {
  const { post } = useHomeControler();
  return (
    <>
      <ProductHero />
    </>
  );
}
