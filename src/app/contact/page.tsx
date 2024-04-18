"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { InputArea } from "@/components/ui/textareainput";

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-auto">
            <div className="max-w-2xl mx-auto p-4 z-10">
                <h1
                    className="relative text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  
                text-center font-sans font-bold mt-16 sm:mt-24"
                >
                    Contact Us Now
                </h1>
                <br />
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    We&apos;re here to help with any questions about our
                    courses, programs or events. Reach out and let us know how
                    we can assist you in your musical journey.
                </p>
                <div className="max-w-md w-full mt-2 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-transparent">
                    <form className="my-2" onSubmit={handleSubmit}>
                        <LabelInputContainer className="mb-4">
                            {/* <Label htmlFor="email">Email Address</Label> */}
                            <Input
                                id="email"
                                placeholder="john@example.com"
                                type="email"
                            />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <InputArea
                                id="text"
                                placeholder="Your Message"
                                type="text"
                            />
                        </LabelInputContainer>
                        <button
                            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            type="submit"
                        >
                            Submit
                            <BottomGradient />
                        </button>

                        {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-8 h-[1px] w-full" /> */}
                    </form>
                </div>
            </div>
            <div className="z-0">
                <BackgroundBeams />
            </div>
        </div>
    );
}

export default ContactPage;
