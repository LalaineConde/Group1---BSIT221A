import { useRouter } from "next/router";

export default function ID(){
    const router = useRouter()
    const id = router.query.id

    return(
        <>
        <h1>Details about student {id}</h1>
        </>
    );
}