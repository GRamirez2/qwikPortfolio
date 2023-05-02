import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '~/routes/layout';
import styles from './footer.module.css';

export default component$(() => {
    const serverTime = useServerTimeLoader();
    return (
        <>
        <section class='w-full  bg-header pb-6 dark:bg-slate-950'>
            <section>
                <article class='h-14 overflow-hidden bg-header dark:bg-slate-950'>
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" class='h-full w-full'>
                        <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" class={styles.svgBottom}>
                        </path>
                    </svg>
                </article>
                <section class='max-w-screen-xl mx-auto'>
                    <article class='flex flex-col md:flex-row justify-around items-center text-lg min-h-fit p-10 mx-4 text-slate-600'>
                        <article class='w-full text-center md:w-1/2 lg:w-1/3 md:text-left mb-6 md:mb-0'>
                            <p class='text-3xl pb-4 dark:text-slate-300'>Get in touch</p>
                            <p class='text-lg dark:text-slate-400'>Looking for a developer, let’s work together!</p>
                            <p class='text-lg dark:text-slate-400'>Email me at contact@georgeramirez.me</p>
                        </article>
                        <article class='w-full md:w-1/2 lg:w-1/3 text-center'>
                            <a target="_blank" class="flex w-full items-center justify-center space-x-4 rounded-md bg-white dark:bg-header-dark p-2 text-sm text-[#2456B7] duration-200 drop-shadow hover:shadow-lg dark:hover:shadow-none hover:shadow-header-dark sm:w-3/4 mx-auto " href="https://www.linkedin.com/in/gramirez-ramirez/"><svg viewBox="0 0 30 30" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6004 2.40039H5.40039C3.74439 2.40039 2.40039 3.74439 2.40039 5.40039V24.6004C2.40039 26.2564 3.74439 27.6004 5.40039 27.6004H24.6004C26.2564 27.6004 27.6004 26.2564 27.6004 24.6004V5.40039C27.6004 3.74439 26.2564 2.40039 24.6004 2.40039ZM10.2004 12.0004V23.4004H6.60039V12.0004H10.2004ZM6.60039 8.68239C6.60039 7.84239 7.32039 7.20039 8.40039 7.20039C9.48039 7.20039 10.1584 7.84239 10.2004 8.68239C10.2004 9.52239 9.52839 10.2004 8.40039 10.2004C7.32039 10.2004 6.60039 9.52239 6.60039 8.68239ZM23.4004 23.4004H19.8004C19.8004 23.4004 19.8004 17.8444 19.8004 17.4004C19.8004 16.2004 19.2004 15.0004 17.7004 14.9764H17.6524C16.2004 14.9764 15.6004 16.2124 15.6004 17.4004C15.6004 17.9464 15.6004 23.4004 15.6004 23.4004H12.0004V12.0004H15.6004V13.5364C15.6004 13.5364 16.7584 12.0004 19.0864 12.0004C21.4684 12.0004 23.4004 13.6384 23.4004 16.9564V23.4004Z" fill="currentColor"></path></svg><p class="text-lg">Linkedin</p></a>
                            
                            <a target="_blank" class="flex w-full items-center justify-center space-x-4 rounded-md bg-white dark:bg-header-dark p-2 text-sm text-black  duration-200 drop-shadow hover:shadow-lg hover:shadow-header-dark dark:hover:shadow-none  sm:w-3/4 mx-auto mt-4" href="https://github.com/GRamirez2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path></svg><p class='text-lg'>GitHub</p></a>
                        </article>
                    </article>
                </section>
            </section>

            <article class='mt-8 text-center text-slate-600'>
                <p class='text-sm dark:text-slate-400'>Developed with <a href="https://qwik.builder.io/" class='text-sky-600' target='_blank'> Qwik</a> + <a href="https://tailwindcss.com/" class='text-sky-600' target='_blank'>Tailwind</a></p>  
                <p class='text-xs dark:text-slate-400'>© <a href="https://tech-mex.io/" target='_blank'>George Ramirez</a>, <span>{serverTime.value.year}</span> - All Rights Reserved</p>  
            </article>
        </section>
        
        </>
    )
});