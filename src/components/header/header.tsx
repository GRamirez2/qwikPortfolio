import { component$ } from '@builder.io/qwik';
import styles from './header.module.css';

export default component$(() => {
    return (
        <header class='w-full'>
            <section class='max-w-screen-xl h-full mx-auto flex flex-col-reverse justify-around sm:pb-0 sm:flex-row items-center px-4 xl:px-0 bg-stone-100'>
                <article class='flex flex-col'>
                    <h1 class='text-4xl md:text-6xl text-center text-slate-700'>George Ramirez</h1>
                    <h3 class='text-lg md:text-2xl text-center text-slate-600'>Software Engineer • Cook • Taco Lover</h3>
                </article>
                <article class='mt-6 mb-4 sm:mr-12 sm:mb-0'>
                    <img id={styles.shape} />
                </article>
            </section>
        
            <article class='max-w-screen-xl h-14 mx-auto overflow-hidden bg-stone-100'>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" class='h-full w-full'>
                    <path d="M-7.34,99.19 C148.42,210.70 446.95,47.88 506.20,130.77 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #fff;">
                    </path>
                </svg>
            </article>
        </header>
    )
});