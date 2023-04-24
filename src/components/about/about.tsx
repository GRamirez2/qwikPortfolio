import { component$ } from '@builder.io/qwik';
// import styles from './about.module.css';

export default component$(() => {
    return (
        <>
        <section class='w-full'>
            <article class='max-w-screen-xl mx-auto text-xl leading-8 text-slate-600'>
                <div class='mx-6'>
                    <p class='pb-3'>
                    I am a passionate software engineer specializing in front-end development, currently working as a senior consultant / senior software engineer at SingleStone Consulting. My current client engagement is with Capital One, where I have architected and developed a large Angular application designed to chart SLA data for different interal applications. Additionally, I am responsible for managing a complex document repository integration for a different line of business. In this role, I work closely with clients to transform business rules into logic and solve complex problems with technical expertise, ingenuity, and patience.
                    </p>
                    <p class='pb-3'>
                    In addition to my professional work, I proudly serve as the co-founder of Tech-Mex.io, a cutting-edge web design agency that specializes in creating captivating marketing websites. Our mission is to empower small businesses to enhance their online presence, drive traffic, and generate successful outcomes.
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