import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import About from '~/components/about/about';
import Showcase from '~/components/showcase/showcase';

export default component$(() => {
  return (
    <>
      <About />
      <Showcase />
    </>
  );
});

export const head: DocumentHead = {
  title: 'George Ramirez | Software Engineer',
  meta: [
    {
      name: 'George Ramirez info',
      content: 'Bio and stuffs',
    },
  ],
};
