import { component$ } from '@builder.io/qwik';
import styles from './header.module.css';

export default component$(() => {
    return (
        <header class='w-full bg-header dark:bg-slate-950'>
            <section class='max-w-screen-xl h-full mx-auto flex flex-col-reverse justify-around sm:pb-0 sm:flex-row items-center px-4 xl:px-0 '>
                <article class='flex flex-col'>
                    <h1 class='text-4xl md:text-6xl text-center text-slate-700 dark:text-slate-300'>George Ramirez</h1>
                    <h3 class='text-lg md:text-2xl text-center text-slate-600 dark:text-slate-400'>Engineer • Manager • Team Lead</h3>
                </article>
                <article class='mt-6 mb-4 sm:mr-12 sm:mb-0'>
                    <img id={styles.shape} />
                </article>
            </section>
        
            <article class='h-14 overflow-hidden bg-header dark:bg-slate-950'>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" class='h-full w-full'>
                    <path class={styles.svgTop} d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" >
                    </path>
                </svg>
            </article>
        </header>
    )
});