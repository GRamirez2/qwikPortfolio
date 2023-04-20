import { component$ } from '@builder.io/qwik';
import styles from './showcase.module.css';

export default component$(() => {
    return (
        <>
        <section class='w-full'>
            <article class='max-w-screen-xl mx-auto pt-10 pb-10 text-xl leading-8 text-slate-600'>
                <div class='mx-6'>
                    <h3 class='text-3xl mb-4'>
                        Feautred Projects
                    </h3>
                    <section class='w-full flex flex-col lg:flex-row lg:flex-wrap lg:justify-between '>
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
                        <article class='w-full lg:w-1/2 pb-2 lg:pr-2'>
                                <section class='p-2 rounded-lg border-2 border-slate-200'>Create Card for showcase</section>
                        </article>
                    </section>
                </div>
            </article>
        </section>
        </>)
    });