import {LoggedInNav} from "@/app/navcomponents/LoggedInNav";
import MainNav from "@/app/navcomponents/MainNav";


export default async function testNav() {

    return (
        <>
            <MainNav/>
            <p>TEST</p>
        <LoggedInNav/>
        </>

    )
}