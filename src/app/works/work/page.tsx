import Workinfo from "./workinfo";
import { Suspense } from "react";

export default function Page(){
    console.log(process.env.NEXT_PUBLIC_BASE_PATH)
    return(
        <main>
            <Suspense>
                <Workinfo baseurl={process.env.NEXT_PUBLIC_BASE_PATH || "https://1010mark.github.io/1010mark-portfolio.github.io"} />
            </Suspense>
        </main>
    )
}