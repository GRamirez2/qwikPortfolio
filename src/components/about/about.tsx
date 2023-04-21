import { component$ } from '@builder.io/qwik';
// import styles from './about.module.css';

export default component$(() => {
    return (
        <>
        <section class='w-full'>
            <article class='max-w-screen-xl mx-auto text-xl leading-8 text-slate-600'>
                <div class='mx-6'>
                    <p class='pb-3'>
                    I'm a software engineer who loves to code and specializes in front-end development. Currently I work for SingleStone Consulting as a senior consultant / senior software engineer. This year my client engagement has been with Capital One where I have architected and developed a large SLA Angular application and am currently managing an intricate document repository intigration for a different line of business. In this role I work closely with the clients transforming business rules to logic and solving complex problems with technical ingenuity and patience.
                    </p>
                    <p class='pb-3'>
                    My evenings and weekends revolve around running a web design agency I started with a friend, Tech-Mex.io. We design and build marketing websites for the new economy.
                    We enjoy helping small businesses grow their digital footprint and use the latest front-end techonology to experiement with websites that have traffic and generate business.
                    </p>
                    <p>
                    As a big fan of good music and food, a small but important benefit of remote work is you are in charge of your daily playlist and can make lunch in your own kitchen. The song I can't stop playing is, Is it Any Wonder, by Durand Jones and the Indications. As for food, it's simple, I love tacos. I eat them often, they make my happy. 
                    </p>

                    <section class='flex flex-row flex-wrap'>
                        
                            <div class='text-sm bg-header-dark rounded-full px-4 mr-2 flex flex-row justify-between items-center mt-3'>
                                <img src="/monitor-24.png" alt="Front-end Logo" class=' w-4 mr-2 contrast-50' />
                            Front-End
                            </div>

                            <div class='text-sm bg-header-dark rounded-full px-4 mr-2 flex flex-row justify-between items-center mt-3'>
                                <img src="/manager-32.png" alt="Manager Logo" class=' w-4 mr-2 contrast-50' />
                            Manager
                            </div>

                            <div class='text-sm bg-header-dark rounded-full px-4 mr-2 flex flex-row justify-between items-center mt-3'>
                                <img src="/angular-24.png" alt="Angular Logo" class=' w-4 mr-2 contrast-50' />
                            Angular
                            </div>

                            <div class='text-sm bg-header-dark rounded-full px-4 mr-2 flex flex-row justify-between items-center mt-3'>
                                <img src="/node-js-32.png" alt="NodeJS Logo" class=' w-4 mr-2 contrast-50' />
                            NodeJS
                            </div>

                            <div class='text-sm bg-header-dark rounded-full px-4 mr-2 flex flex-row justify-between items-center mt-3'>
                                <img src="/location-24.png" alt="George Ramirez located in Little Rock Arkansas" class=' w-4 mr-2 contrast-50' />
                            Little Rock, AR
                            </div>
                        
                    </section>
                </div>
            </article>
        </section>
        </>)
    });