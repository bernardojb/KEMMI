// 'use client'
import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/data/footer-data";
import { generalData } from "@/data/general-data";
import DefaultButton from "../buttons/DefaultButton";

const Footer = () => {
    return (
        <footer className=" bg-bg-color-0">
            <div className="bg-white rounded-t-[60px] ">
                <div className="container">
                    <div className="grid grid-cols-16 pt-24">
                        <div className=" col-start-2 col-span-14">
                            <div className="pb-9 flex flex-row justify-between w-full items-center">
                                <Link href="/" className="">
                                    <Image
                                        src="/assets/main/alt-logo.svg"
                                        className="grayscale brightness-[10] mb-5"
                                        alt="BRITE Informática"
                                        height={60}
                                        width={100}
                                    />
                                </Link>
                                <div className="flex flex-row">
                                    <Link href="/" className="content-primary mr-12">
                                        <p>HOME</p>
                                    </Link>
                                    <Link href="/" className="content-primary mr-12">
                                        <p>SOBRE</p>
                                    </Link>
                                    <Link href="/" className="content-primary">
                                        <p>CONTATO</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="pb-16 flex flex-row justify-between w-full items-center">
                                <p className="content-secondary text-base mb-2 max-w-[260px] "> © {new Date().getFullYear()} Kemmi Farma. All rights reserved. </p>
                                <div className="flex flex-row">
                                    <DefaultButton href="/" text="Solicitar cotação" style="btn-black" icon="brightness-[2000%]" />
                                </div>
                            </div>
                            <div className="flex flex-row justify-between w-full items-center">
                                <div>
                                    <p className="content-secondary text-xs mb-2 max-w-[260px] "> created at hokup.com.br </p>
                                </div>
                                <div className="flex flex-row">
                                    {generalData.links.map((i) => (
                                        <a target='_blank' href={i.href} className="mr-4">
                                            <Image
                                                src={i.image}
                                                alt="Social media icon"
                                                width={18}
                                                height={18}
                                                className="hover:brightness-200 ease-out transition duration-200"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-16 relative h-[300px] mt-40">
                            <Image src="/assets/main/gradient-logo.svg" fill alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
