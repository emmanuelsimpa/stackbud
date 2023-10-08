import { ChildrenProps } from '@/types/Children';
import { Footer, Header } from '.';

export function Layout({ children }: ChildrenProps) {
  return (
    <div className="wrapper">
      <Header />
      <main className="mt-32">{children}</main>
      <Footer />
    </div>
  );
}
