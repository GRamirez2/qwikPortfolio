import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Counter from '~/components/starter/counter/counter';
import Hero from '~/components/starter/hero/hero';
import Infobox from '~/components/starter/infobox/infobox';
import Starter from '~/components/starter/next-steps/next-steps';

export default component$(() => {
  return (
    <>
      {/* Each section can hold an svg or background that is responsive with a component inside */}
      <section>Hello this is the main page</section>
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
