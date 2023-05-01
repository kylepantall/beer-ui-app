import { Hero } from './components/hero';
import { NavBar } from './components/nav';

export default async function Home() {
  return (
    <>
      <NavBar links={[{ link: '/', label: 'Home' }]} />
      <Hero />
    </>
  );
}
