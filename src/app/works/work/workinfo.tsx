"use client";
import type { Work } from "../works";
import { works } from "../works";
import { tags_table } from "../works";
import { useSearchParams, notFound } from "next/navigation";
import React, { useRef } from "react";
import Image from 'next/image'

function WorkDescription(props: { descript: string }) {
    const desc = props.descript.split(/(\n)/).map((item, index) => {
        return (<React.Fragment key={index}>
            {item.match(/\n/) ? <br /> : item}
        </React.Fragment>)
    })
    return (<p>{desc}</p>);
}

export default function Workinfo({ baseurl }: { baseurl: string }) {
    console.log(baseurl);
    const param = useSearchParams();
    const pid = param.get("pid");
    const work: Work = works.filter(w => w.directry_name == pid)[0];
    const popupimageref = useRef<HTMLImageElement>(null);
    const imagehiddener = useRef<HTMLDivElement>(null);
    function popupimageopener(src : string){
        if(popupimageref.current?.src) popupimageref.current.src = src;
        imagehiddener.current?.classList.remove("hidden");
    }
    function popupimagecloser(){
        imagehiddener.current?.classList.add("hidden")
    }
    if (!work) notFound();
    return (
        <div>
            <div>
                {work.images.length ?
                    <Image alt="" fill className="!max-h-[60vh] !relative md:!max-w-[60%] object-contain md:float-left md:mx-2 mb-2 mx-auto mt-2" src={`${baseurl}/image/works/${work.directry_name}/${work.images[0]}`} />
                    : ""}
                <div className="m-2">
                    {work.tags.map((tag, index) => {
                        if (!tags_table[tag as keyof typeof tags_table]) return false;
                        return (
                            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tags_table[tag as keyof typeof tags_table]}</span>
                        )
                    })}
                    <h1 className="text-2xl md:text-3xl font-semibold">{work.name}</h1>
                </div>
                {work.links.map((link, index) => {
                    return (<a href={link} key={index} className="md:ml-0 ml-2 text-blue-800 hover:text-blue-400 underline">{link}</a>)
                })}
            </div>
            <div className="m-2 clear-both">
                <WorkDescription descript={work.description} />
            </div>
            <div className="flex my-2 mx-auto max-w-full h-full gap-8 overflow-x-scroll snap-x">
                {work.images.map((workimage, index) => {
                    return (
                        <div className="h-32 snap-center relative block" key={index}>
                            <Image alt="" onClick={() => popupimageopener(`${baseurl}/image/works/${work.directry_name}/${workimage}`)} 
                            fill className="!h-32 !w-auto !relative max-w-[initial] object-contain" src={`${baseurl}/image/works/${work.directry_name}/${workimage}`} />
                        </div>
                    )
                })}
            </div>

            <div className="hidden fixed top-0 left-0 bg-black bg-opacity-70 w-screen h-screen" ref={imagehiddener} >
                <div className="z-20 fixed top-0 left-0 w-screen h-screen" onClick={popupimagecloser} />
                <img className="z-30 fixed inset-0 mx-auto max-w-screen max-h-screen" src="gyaaaaaaaaa" ref={popupimageref} />
            </div>

        </div>
    )
}