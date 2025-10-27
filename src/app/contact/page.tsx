"use client";
import { useState } from "react";
import { Vortex } from "@/components/ui/vortex";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";

export default function Page() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("Failed to send message.");
            }
        } catch (error) {
            setStatus("Something went wrong.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
            <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
                <div>
                    <form
                        onSubmit={handleSubmit}
                        className="bg-black opacity-60 p-8 rounded-2xl shadow-lg w-full max-w-md"
                    >
                        <h2 className="text-2xl bg-blue-600 rounded-full font-semibold text-center mb-6 text-gray-800">
                            Contact Us
                        </h2>

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-amber-200 mb-4 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-pink-400 rounded-full mb-4 p-3 border focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full mb-4 p-3 border rounded-full bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                        <div className="flex justify-center items-center">
                         <Button
                            borderRadius="1.75rem"
                            className="bg-white  dark:bg-slate-900 text-black rounded-full dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            <Link href={'/courses'}>Contact Us</Link>
                        </Button>
                        </div>
                        {status && (
                            <p className="text-center text-sm mt-4 text-gray-600">{status}</p>
                        )}
                    </form>
                </div>

            </Vortex>


        </div>
    );
}
