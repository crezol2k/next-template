import React, { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function MyLayout({ children }: any) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
