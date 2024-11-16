"use client";

import React, { useEffect, useRef } from "react";
import GridContainer from "./GridContainer";

import IconFile from "/public/icon-file.svg";
import Image from "next/image";
import IconHand from "/public/icon-hand.svg";
import IconHand02 from "/public/icon-hand-02.svg";
import IconMockup from "/public/mockup.svg";
import gsap from "gsap";

const HeroSection = () => {
    const textHeroRef = useRef(null);
    const mockupLeftRef = useRef(null);
    const mockupRightRef = useRef(null);

    useEffect(() => {
        const textHero = textHeroRef.current;
        const mLeft = mockupLeftRef.current;
        const mRight = mockupRightRef.current;

        gsap.fromTo(
            mLeft,
            {
                rotate: 0,
            },
            {
                rotate: -10,
                duration: 1,
            }
        );

        gsap.fromTo(
            mRight,
            {
                rotate: 0,
            },
            {
                rotate: 10,
                duration: 1,
            }
        );

        gsap.fromTo(
            textHero,
            {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power4.out",
            }
        );
    }, []);

    return (
        <section className="relative w-full h-section-hero bg-hero bg-no-repeat bg-top bg-green-primary border-t border-t-green-border pt-16 overflow-hidden">
            <GridContainer className="flex flex-col items-center">
                <div
                    className="w-full max-w-text-hero text-center opacity-0"
                    ref={textHeroRef}
                >
                    <h3 className="text-xl font-medium text-green-actived mb-4">
                        Novo curso focado em instagram
                    </h3>
                    <h1 className="text-white text-7xl/normal font-semibold mb-2 ">
                        Destrave as suas habilidades
                    </h1>
                    <div className="flex items-center justify-center gap-10">
                        <button className="flex items-center gap-2">
                            <Image src={IconFile} alt="Icon File" />
                            <span className="text-white font-medium">
                                Assinar lista de espera
                            </span>
                        </button>
                        <button className="py-4 px-5 bg-green-btn rounded-full text-green-primary font-bold">
                            Começar agora
                        </button>
                    </div>
                </div>
                <div className="relative max-w-area-icon w-full mt-4 h-28">
                    <Image
                        src={IconHand}
                        alt="icon hand"
                        className="absolute left-0 bottom-0"
                    />
                    <Image
                        src={IconHand02}
                        alt="icon hand"
                        className="absolute top-0 right-0"
                    />
                </div>
                <div className=" absolute -bottom-44 w-full max-w-area-mockups flex justify-between">
                    <Image
                        src={IconMockup}
                        alt="mockup"
                        className="relative top-[1.1rem] left-[3.3rem]"
                        ref={mockupLeftRef}
                    />
                    <Image
                        src={IconMockup}
                        alt="mockup"
                        className="relative top-[1.1rem] right-[3.3rem]"
                        ref={mockupRightRef}
                    />
                </div>
            </GridContainer>
        </section>
    );
};

export default HeroSection;
