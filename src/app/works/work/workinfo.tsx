"use client";
import type { Work } from "../works";
import { works } from "../works";
import { tags_table } from "../works";
import { useSearchParams, notFound } from "next/navigation";
import React from "react";

function WorkDescription(props: {descript: string}){
    const desc = props.descript.split(/(\n)/).map((item, index) => {
        return (<React.Fragment key={index}>
            {item.match(/\n/) ? <br /> : item}
        </React.Fragment>)
    })
    return (<p>{desc}</p>);
}

export default function Workinfo() {
    const param = useSearchParams();
    const pid = param.get("pid");
    const work : Work = works.filter(w => w.directry_name == pid)[0];
    if (!work) notFound();
    return (
        <div>
            <div>
                {work.images.length ? 
                    <img className="max-h-[60vh] md:max-w-[80%] md:float-left md:mx-2 mb-2 mx-auto" src={`/image/works/${work.directry_name}/${work.images[0]}`} />
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
            </div>
            <div className="m-2 clear-both">
                <WorkDescription descript={work.description} />
            </div>
        </div>
    )
}