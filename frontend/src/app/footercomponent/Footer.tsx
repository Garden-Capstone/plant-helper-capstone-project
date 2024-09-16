'use client'

import { Footer as FlowbiteFooter } from 'flowbite-react';

export function Footer() {
    return (
        <FlowbiteFooter container className="bg-[#DAA520] p-5 mt-11">
            <FlowbiteFooter.Copyright className="text-[#F9F7EF] hover:font-bold" href="/" by="PlantWhisperer™" year={2024} />
            <FlowbiteFooter.LinkGroup className="text-[#F9F7EF] hidden md:flex">
                <FlowbiteFooter.Link className="hover:font-bold" href="/">Home</FlowbiteFooter.Link>
                <FlowbiteFooter.Link className="hover:font-bold" href="/questions">Questionnaire</FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
        </FlowbiteFooter>
    );
}