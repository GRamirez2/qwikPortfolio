import { component$ } from '@builder.io/qwik';
import styles from './showcase.module.css';

export default component$(() => {
    return (
        <>
        <section class='w-full'>
            <article class='max-w-screen-xl mx-auto pt-10 pb-10 text-xl leading-8 text-slate-600'>
                <div class='mx-6'>
                    <h3 class='text-4xl mb-8'>
                        Feautred Projects
                    </h3>
                    <section class='w-full flex flex-col lg:flex-row lg:flex-wrap lg:justify-between '>
                        <article class='w-full lg:w-1/2 pb-2 lg:pr-2'>
                                <section class='pt-1 rounded-lg border-2 border-header-dark'>

                                    <img src="/gaspar.png" alt="Gaspar Enriquez screenshot"/>

                                    <article class='p-6 mt-4 bg-header rounded-b-lg'>
                                        <h3 class='text-2xl mb-3'> Process Wire, a PHP framework</h3>
                                        <h2 class='text-base mb-4'>Full-stack artist portfolio website build with Process Wire, tailwind and javascript. Server side rendered and fully responsive.</h2>

                                        <div class='h-full flex justify-end'>
                                            <a href="https://www.gasparenriquez.com" target="_blank">
                                                <button class='text-base px-3 py-1 bg-header-dark rounded-md border-2 border-header-dark hover:bg-header-light  hover:shadow-lg hover:text-slate-800 flex flex-row justify-between items-center'>Visit Site    <span class='inline'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                    </svg>
                                                </span>
                                                </button>
                                            </a> 
                                        </div>
                                    </article>
                                </section>
                        </article>
                        <article class='w-full lg:w-1/2 pb-2 lg:pr-2'>
                                <section class='p-2 rounded-lg border-2 border-slate-200'>Create Card for showcase</section>
                        </article>
                        <article class='w-full lg:w-1/2 pb-2 lg:pr-2'>
                                <section class='p-2 rounded-lg border-2 border-slate-200'>Create Card for showcase</section>
                        </article>
                        <article class='w-full lg:w-1/2 pb-2 lg:pr-2'>
                                <section class='p-2 rounded-lg border-2 border-slate-200'>Create Card for showcase</section>
                        </article>
                        <article class='w-full lg:w-1/2 pb-2 lg:pr-2'>
                                <section class='p-2 rounded-lg border-2 border-slate-200'>Create Card for showcase</section>
                        </article>
                        <article class='w-full lg:w-1/2 pb-2 lg:pr-2'>
                                <section class='p-2 rounded-lg border-2 border-slate-200'>Create Card for showcase</section>
                        </article>
                    </section>
                </div>
            </article>
        </section>
        </>)
    });