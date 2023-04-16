import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Header from '~/components/header/header';
import Footer from '~/components/starter/footer/footer';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <Slot />
      </main>
      {/* This will be a component, treat like the nav wrapper */}
      <footer>This is the footer</footer>
    </>
  );
});
