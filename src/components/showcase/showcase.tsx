import { component$ } from '@builder.io/qwik';
// import styles from './showcase.module.css';

export default component$(() => {
    return (
        <>
        <section class='w-full dark:bg-slate-700'>
            <article class='max-w-screen-xl mx-auto pt-10 pb-10 text-xl leading-8 text-slate-600'>
                <div class='mx-6'>
                    <h3 class='text-4xl mb-8 dark:text-slate-200'>
                        Feautred Projects
                    </h3>
                    <section class='w-full flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row lg:flex-wrap lg:justify-between '>
                        {/* Dice Game */}
                        <article class='w-full lg:w-1/2 pb-2 lg:pr-2'>
                                <section class='rounded-lg border-2 border-header-dark'>
                                    <img src="/discoDice.png" alt="Disco Dice screenshot" class='rounded-t-md'/>
                                    

                                    <article class='p-6 bg-header rounded-b-lg'>
                                        <h3 class='text-2xl mb-3'> Angular, hosted on Vercel</h3>
                                        <h2 class='text-base mb-4'>Front-end score keeper app for Disco Dice game. Designed for a mobile presentation.</h2>

                                        <div class='h-full flex justify-end'>
                                            <a href="https://disco-dice.vercel.app/" target="_blank">
                                                <button class='text-base px-3 py-1 text-slate-500 bg-white rounded-md border-2 border-slate-400
                                                hover:border-slate-500 hover:bg-slate-500  hover:shadow-lg hover:text-header-light flex flex-row justify-between items-center'>Visit Site    <span class='inline'>
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
                        {/* Gaspar */}
                        <article class='w-full lg:w-1/2 pb-2 lg:pr-2'>
                                <section class='rounded-lg border-2 border-header-dark'>

                                    <img src="/gaspar.png" class='rounded-t-md' alt="Gaspar Enriquez screenshot"/>

                                    <article class='p-6 bg-header rounded-b-lg'>
                                        <h3 class='text-2xl mb-3'> Process Wire, a PHP framework</h3>
                                        <h2 class='text-base mb-4'>Full-stack artist portfolio website build with Process Wire, tailwind and javascript. Custom designed, server side rendered and fully responsive.</h2>

                                        <div class='h-full flex justify-end'>
                                            <a href="https://www.gasparenriquez.com" target="_blank">
                                            <button class='text-base px-3 py-1 text-slate-500 bg-white rounded-md border-2 border-slate-400
                                                hover:border-slate-500 hover:bg-slate-500  hover:shadow-lg hover:text-header-light flex flex-row justify-between items-center'>Visit Site    <span class='inline'>
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
                        {/* Single Stone API */}
                        <article class='w-full lg:w-1/2 pb-2 lg:pr-2'>
                                <section class='rounded-lg border-2 border-header-dark'>

                                    <img src="/node_api.png" class='rounded-t-md' alt="Gaspar Enriquez screenshot"/>

                                    <article class='p-6 bg-header rounded-b-lg'>
                                        <h3 class='text-2xl mb-3'> Node API, hosted on Render.com</h3>
                                        <h2 class='text-base mb-4'>Full CRUD API, build with NodeJS, Express, Sequelize and custom swagger documentation.</h2>

                                        <div class='h-full flex justify-end'>
                                            <a href="https://singlestoneapi.onrender.com/ssc/api/v1/api-docs/#/" target="_blank">
                                            <button class='text-base px-3 py-1 text-slate-500 bg-white rounded-md border-2 border-slate-400
                                                hover:border-slate-500 hover:bg-slate-500  hover:shadow-lg hover:text-header-light flex flex-row justify-between items-center'>Visit Site    <span class='inline'>
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
                        {/* Media Sourcery */}
                        <article class='w-full lg:w-1/2 pb-2 lg:pr-2'>
                                <section class='rounded-lg border-2 border-header-dark'>

                                    <img src="/mediaSourcery.png" class='rounded-t-md' alt="Media Sourcery screenshot"/>

                                    <article class='p-6 bg-header rounded-b-lg'>
                                        <h3 class='text-2xl mb-3'> NextJS, hosted on Vercel</h3>
                                        <h2 class='text-base mb-4'>React marketing site with a Process Wire CMS exported and hosted as a static site.</h2>

                                        <div class='h-full flex justify-end'>
                                            <a href="https://www.mediasourcery.com/" target="_blank">
                                            <button class='text-base px-3 py-1 text-slate-500 bg-white rounded-md border-2 border-slate-400
                                                hover:border-slate-500 hover:bg-slate-500  hover:shadow-lg hover:text-header-light flex flex-row justify-between items-center'>Visit Site    <span class='inline'>
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
                    </section>
                </div>
            </article>
        </section>
        </>)
    });