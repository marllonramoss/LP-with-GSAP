import Image from "next/image";
import Link from "next/link";
import React from "react";

import LogoImg from "/public/logo.svg";
import SearchIcon from "/public/icon-search.svg";
import IconUser from "/public/icon-user.svg";
import GridContainer from "./GridContainer";

const arrayMenu = [
    "Início",
    "Benefícios",
    "Para quem é o curso?",
    "Preços promocionais",
    "Sobre nós",
];

const Header = () => {
    const activedStyle = "bg-green-actived text-white/100 rounded-full";
    return (
        <header className="relative w-full h-24 bg-green-primary flex items-center">
            <GridContainer className="flex items-center justify-between">
                <Image src={LogoImg} alt="logo" width={186} height={49} />
                <div className="flex items-center  gap-20">
                    <nav className="flex gap-2">
                        {arrayMenu.map((item, index) => (
                            <Link
                                href={"#"}
                                key={index}
                                className={`px-3 py-1 text-white/40 hover:text-white/100 transition-all  ${
                                    index === 0 ? activedStyle : ""
                                }`}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2">
                            <Image src={SearchIcon} alt="Search Icon" />
                        </button>
                        <button className="flex items-center gap-2">
                            <Image src={IconUser} alt="User Icon" />
                            <span className="text-white font-medium">
                                Fazer Login
                            </span>
                        </button>
                    </div>
                </div>
            </GridContainer>
        </header>
    );
};

export default Header;
