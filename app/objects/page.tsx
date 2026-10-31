import ExhibitionData from "@/app/components/ExhibitionData";
import {Suspense} from "react";

export default function ObjectData(){
    return(
        <>
            <Suspense fallback={<p>Loading...</p>}>
                <ExhibitionData/>
            </Suspense>
        </>
    )
}