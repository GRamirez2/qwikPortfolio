import { component$ } from '@builder.io/qwik';
import styles from './header.module.css';

export default component$(() => {
    return (
        <header class='w-full'>
            <section class='max-w-screen-xl h-full mx-auto flex flex-col pb-6 sm:pb-0 sm:flex-row items-center px-4 xl:px-0'>
                <article class='m-4 sm:mr-12'>
                    <img id={styles.shape} />
                </article>
                <article class='flex flex-col'>
                    <h1 class='text-4xl md:text-6xl text-center text-slate-700'>George Ramirez</h1>
                    <h3 class='text-lg md:text-2xl text-center text-slate-600'>Software Engineer • Cook • Taco Lover</h3>
                </article>
            </section>
        </header>
    )
});