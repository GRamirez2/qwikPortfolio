import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import About from '~/components/about/about';
import { QwikPartytown } from '~/components/partytown/partytown';
import Showcase from '~/components/showcase/showcase';

export default component$(() => {

  const ORIGIN = `https://www.googletagmanager.com`;
  const ID = `UA-180300411-1`;

  return (
    <>
      <QwikPartytown forward={['gtag', 'datalayer']} />
      <script async type="text/partytown" src={`${ORIGIN}/gtag/js?id=${ID}`}></script>

      <script
        type="text/partytown"
        dangerouslySetInnerHTML={`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function () {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', ${ID});
        `} ></script>


      <About />
      <Showcase />
    </>
  );
});

export const head: DocumentHead = {
  title: 'George Ramirez | Software Engineer',
  meta: [
    {
      name: 'keywords',
      content: 'george ramirez, angular, node, manager, team lead, javascript, js',
    },
    {
      name: 'description',
      content: 'George Ramirez software engineer bio and sample projects',
    },
    {
      name: 'author',
      content: 'George Ramirez',
    },
    {
      property: 'og:locale',
      content: 'en_US'
    },
    {
      property: 'og:title',
      content: 'George Ramirez\'s software engineer biography'
    },
    {
      property: 'og:type',
      content: 'portfolio'
    },
    {
      property: 'og:url',
      content: 'https://georgeramirez.me/'
    },
    {
      property: 'og:image',
      content: 'https://gr.manage-my.site/George_Ramirez_preview.png'
    },
    {
      property: 'og:image:width',
      content: '1200'
    },
    {
      property: 'og:image:height',
      content: '500'
    }
  ],
};
