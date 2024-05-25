import Workinfo from "./workinfo";
import { Suspense } from "react";

export default function Page(){
    return(
        <main>
            <Suspense>
                <Workinfo />
            </Suspense>
        </main>
    )
}