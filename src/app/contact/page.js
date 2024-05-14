'use client'
import React, { useRef } from 'react';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../../firebase';


export default function Contact() {
    const messageRef = useRef();
    const ref = collection(db,'siteforms');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(messageRef.current.value);

        const data = {
            message: messageRef.current.value,
        };

        try {
            await addDoc(ref, data);
            console.log("Data submitted successfully!");
            messageRef.current.value = ""; // Clear input field after submission
        } catch (e) {
            console.error("Error submitting data:", e.message); // Log error message
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log("Handling form submission");
            handleFormSubmit(e);
     } else (error) => {
        return (
            console.error(error.message)
        )
     }
    };

    return (
        <section>
            <form onSubmit={handleFormSubmit} className="max-w-md mx-auto lg:ml-0 lg:pl-44 py-8">
                {/* <div className="mb-4"> */}
                    {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-input rounded-md w-full"
                        placeholder="John Doe"
                        ref={nameRef}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-input rounded-md w-full"
                        placeholder="john.doe@mail.com"
                        ref={emailRef}
                    />
                </div> */}

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="form-textarea rounded-md w-full"
                        placeholder="Let's collab!"
                        ref={messageRef}
                        onKeyDown={handleKeyDown}
                    />
                </div>

                <button
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </section>
    );
}

