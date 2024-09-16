import {MainNav} from "@/app/navcomponents/MainNav";
import {LoggedInNav} from "@/app/navcomponents/LoggedInNav";


export default async function testNav() {

    return (
        <>
        <MainNav/>
            <p> TEST PAGE </p>
        <LoggedInNav/>
        </>

    )
}