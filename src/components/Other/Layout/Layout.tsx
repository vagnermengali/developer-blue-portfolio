import Header from '@/components/Other/Header/Header'

import { ChildrenInterface } from '@/interfaces/ChildrenInterface';
import Footer from '@/components/Other/Footer/Footer';
import Transition from '@/components/Other/Transition/Transition';

const Layout = ({ children }: ChildrenInterface) => {
  
  return (
    <Transition>
      <Header />
      {children}
      <Footer />
    </Transition>
  );
};

export default Layout;
