

"use client";

import {Button, Label, Textarea} from "flowbite-react";
import React from "react";

export function Progress() {
    return (
        <div className="mx-auto max-w-md mt-9 border-8 rounded-lg border-green-700">
            <div className="justify-center text-center mb-2 block">
                <Label htmlFor="Track Your Plants Progress" value="Track Your Plants Progress" />
            </div>
            <Textarea id="comment" placeholder="Add in any information about your plant that you want to track" required rows={4} />
            <Button className="mx-auto mt-5 bg-[#FF9999] enabled:hover:bg-[#3CB371]" type="submit">Submit</Button>
        </div>
    );
}
