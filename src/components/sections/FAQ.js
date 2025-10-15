'use client'

import { useState } from 'react';

const faqData = [
    {
        question: "There's tons of other creative agencies out there, what makes you different?",
        answer: "We focus on strategic creative thinking rooted in humanity and professional respect. We're not just executing designs—we're your honest collaborators who prioritize sustainable creative ecosystems and healthier work environments."
    },
    {
        question: "We just started and we don't have a lot of budget, how can you help us?",
        answer: "We understand startup constraints and offer flexible engagement models. We can start with focused, high-impact projects that fit your budget while still delivering meaningful results. Let's talk about what matters most to your business right now."
    },
    {
        question: "How can you guarantee your services success?",
        answer: "We can't guarantee success—no honest agency can. What we can guarantee is our commitment to transparent communication, strategic thinking, and putting in the work to understand your unique challenges. Success comes from collaboration, not guarantees."
    },
    {
        question: "Do you handle projects outside of your service list?",
        answer: "Absolutely! While we have core services, we're always open to interesting challenges. If it aligns with our values and we believe we can deliver quality work, we're happy to discuss custom projects. Reach out and let's explore the possibilities."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 pt-16 pb-8 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-0 lg:gap-12">
                {/* FAQ Title */}
                <h2 className="font-montserrat font-bold text-2xl lg:text-5xl text-krit-black lg:pt-6">
                    FAQ
                </h2>

                {/* FAQ Items */}
                <div className="flex flex-col">
                    {faqData.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300">
                            {/* Question Button */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between py-6 text-left group"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-blender text-xl lg:text-3xl text-krit-black pr-4">
                                    {faq.question}
                                </span>
                                <span className="text-2xl text-krit-black flex-shrink-0 transition-transform duration-300"
                                        style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                                    +
                                </span>
                            </button>

                            {/* Answer - Accordion */}
                            <div 
                                className="overflow-hidden transition-all duration-300 ease-in-out"
                                style={{ 
                                    maxHeight: openIndex === index ? '500px' : '0px',
                                    opacity: openIndex === index ? 1 : 0
                                }}
                            >
                                <p className="font-blender text-base lg:text-lg text-gray-600 pb-6">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}