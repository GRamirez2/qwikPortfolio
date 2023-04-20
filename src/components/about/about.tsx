import { component$ } from '@builder.io/qwik';
import styles from './about.module.css';

export default component$(() => {
    return (
        <>
        <section class='w-full'>
            <article class='max-w-screen-xl mx-auto pt-10 text-xl leading-8 text-slate-600'>
                <div class='mx-6'>
                    <p class='pb-3'>
                    I'm a software engineer who loves to code and specializes in front-end development. Currently I work for SingleStone Consulting as a senior consultant / senior software engineer. This year my client engagement has been with Capital One where I have architected and developed a large SLA Angular application and am currently managing an intricate document repository intigration for a different line of business. In this role I work closely with the clients transforming business rules to logic and solving complex problems with technical ingenuity and patience.
                    </p>
                    <p class='pb-3'>
                    My evenings and weekends revolve around running a web design agency I started with a friend, Tech-Mex.io. We design and build marketing websites for the new economy.
                    We enjoy helping small businesses grow their digital footprint and use the latest front-end techonology to experiement with websites that have traffic and generate business.
                    </p>
                    <p class='pb-3'>
                    As a big fan of good music and food, a small but important benefit of remote work is you are in charge of your daily playlist and can make lunch in your own kitchen. The song I can't stop playing is, Is it Any Wonder, by Durand Jones and the Indications. As for food, it's simple, I love tacos. I eat them often, they make my happy. 
                    </p>

                    <section>
                        <span>
                        <button class='text-sm bg-header-dark rounded-full px-4 mr-2'>Front-End</button>
                        <button class='text-sm bg-header-dark rounded-full px-4 mr-2'>Manager</button>
                        <button class='text-sm bg-header-dark rounded-full px-4 mr-2'>Angular</button>
                        <button class='text-sm bg-header-dark rounded-full px-4 mr-2'>NodeJS</button>
                        <button class='text-sm bg-header-dark rounded-full px-4 mr-2'>Little Rock, AR</button>
                        <button class='text-sm bg-header-dark rounded-full px-4 mr-2'>Tacos</button>
                        </span>
                    </section>
                </div>
            </article>
        </section>
        </>)
    });