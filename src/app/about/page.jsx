import React from "react";
import Image from "next/image";
import Button from "@/components/Shared/Button/Button";
import Link from "next/link";
import styles from "./page.module.css";

const About = () => {
    return (
        <div className=' py-16 md:py-20'>



            <div className="max-w-7xl mx-auto px-2">
                <div className='flex flex-col gap-4'>
                    <div className="h-72 overflow-hidden relative rounded">

                        <Image
                            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            fill={true}
                            className={styles.img}
                            objectFit="cover"
                            objectPosition="center center"
                            alt=""

                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-semibold">Digital Storytellers</h1>
                        <h2 className="">
                            Handcrafting award winning digital experiences
                        </h2>
                    </div>
                </div>
                <div className=" flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col gap-2 mt-4">
                        <h1 className="text-2xl font-semibold">Who Are We?</h1>
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
                            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
                            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
                            <br />
                            <br />
                            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
                            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
                            officiis voluptatum quo ea eveniet?
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <h1 className="text-2xl font-semibold">What We Do?</h1>
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
                            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.

                            <div className="mt-4 flex flex-col gap-1">
                                <li>Creative Illustrations</li>
                                <li>Dynamic Websites</li>
                                <li>Fast and Handy</li>
                                <li>Mobile Apps</li>

                            </div>
                        </p>
                        <Link className="mt-1" href='/contact'>
                            <Button width='w-32'>Contact</Button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;