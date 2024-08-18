"use client"
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react"

export default function Login() {
    return (
        <>
            <div
                className="absolute inset-0 bg-local"
                style={{
                    backgroundImage: "url('https://img.freepik.com/free-vector/beige-leafy-watercolor-background-vector_53876-136491.jpg?w=1060&t=st=1724022751~exp=1724023351~hmac=f224ba527076b4131766c1125d7785597015d37c9d3d7379648cb1d0f1030137')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: '-1'
                }}
            ></div>

            <Card className="relative max-w-lg mx-auto my-40 bg-white bg-opacity-80 shadow-2xl">
                <div>
                    <p className="flex justify-center pt-16 text-4xl">Plant Whisperer</p>
                </div>
                <div>
                    <p className="flex justify-center pb-14">Blah Blah Blah</p>
                </div>
                <form className="flex flex-col gap-4 items-center">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Email" />
                        </div>
                        <TextInput className="w-96" id="email1" type="email" placeholder="email" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Password" />
                        </div>
                        <TextInput className="w-96" id="password1" type="password" placeholder="password" required />
                    </div>
                    <Button className="w-96 mt-10 py-2" type="submit">
                        Sprout Back In!
                    </Button>
                    <div className="mt-7 mb-8 text-xs">
                        <p>Don't have an account? Sign up to start growing today!</p>
                    </div>
                </form>
            </Card>
        </>
    );
}
