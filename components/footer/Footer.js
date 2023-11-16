// 'use client'
import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/data/footer-data";
import { generalData } from "@/data/general-data";
import DefaultButton from "../buttons/DefaultButton";

const Footer = () => {
    return (
        <footer className=" bg-bg-color-0">
            <div className="bg-white rounded-t-[28px] sm:rounded-t-[60px] ">
                <div className="container">
                    <div className="grid grid-cols-16 pt-24">
                        <div className="col-start-1 sm:col-start-2 col-span-full sm:col-span-14">
                            <div className="sm:pb-9 flex flex-col sm:flex-row justify-between w-full sm:items-center">
                                <Link href="/" className="">
                                    <Image
                                        src="/assets/main/alt-logo.svg"
                                        className="mb-6"
                                        alt="Kemmi Farma"
                                        height={60}
                                        width={100}
                                    />
                                </Link>
                                <div className="sm:hidden pb-16 flex flex-col sm:flex-row justify-between w-full sm:items-center">
                                    <p className="content-secondary text-base sm:mb-0 max-w-[260px] "> © {new Date().getFullYear()} Kemmi Farma. All rights reserved. </p>
                                </div>
                                <div className="flex flex-row flex-wrap">
                                    <Link href="/" className="content-primary mb-6 sm:mb-6 mr-[17px] sm:mr-12 hover:text-footer-text-hover ease-out duration-500 group-hover:transition-all group-hover:ease-out group-hover:duration-500">
                                        <p>HOME</p>
                                    </Link>
                                    <Link href="/sobre" className="content-primary mb-6 sm:mb-6 mr-[17px] sm:mr-12 hover:text-footer-text-hover ease-out duration-500 group-hover:transition-all group-hover:ease-out group-hover:duration-500">
                                        <p>SOBRE</p>
                                    </Link>
                                    <Link href="/contato" className="content-primary mb-6 hover:text-footer-text-hover ease-out duration-500 group-hover:transition-all group-hover:ease-out group-hover:duration-500">
                                        <p>CONTATO</p>
                                    </Link>
                                </div>
                            </div>

                            <div className="pb-[28px] sm:pb-16 flex flex-col sm:flex-row justify-between w-full sm:items-center">
                                <p className="hidden sm:flex content-secondary text-base mb-3 sm:mb-0 max-w-[260px] "> © {new Date().getFullYear()} Kemmi Farma. All rights reserved. </p>
                                <div className="flex flex-row ml-auto">
                                    <DefaultButton href="/contato" text="Solicitar cotação" style="btn-black" icon="brightness-[2000%]" />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-between w-full items-center">
                                <Link target="_blank" href="https://www.hokup.com.br/" className="order-2 sm:order-1 flex flex-row items-center sm:mb-0 hover:brightness-0 cursor-pointer ease-out duration-500 group-hover:transition-all group-hover:ease-out group-hover:duration-500">
                                    <Image src="/assets/icons/general/hokup.svg" height={16} width={16} alt="hokup.com.br" className="mr-3" />
                                    <p className="content-secondary text-xs max-w-[260px] "> created at hokup.com.br </p>
                                </Link>
                                <div className="order-1 sm:order-2 flex flex-row pb-9 sm:pb-0 ">
                                    {/* {generalData.links.map((i) => (
                                        <a target='_blank' href={i.href} className="mr-4 hover:brightness-0 ease-out duration-500 hover:transition-all hover:ease-out hover:duration-500">
                                            <Image
                                                src={i.image}
                                                alt="Social media icon"
                                                width={24}
                                                height={24}
                                                className="ease-out transition duration-200"
                                            />
                                        </a>
                                    ))} */}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-16 relative h-[300px] mt-40">
                            <Image src="/assets/main/gradient-logo.svg" fill alt="Kemmi Gradient Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
