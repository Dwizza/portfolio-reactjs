import  { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-100 to-blue-50 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-xl mx-auto rounded-xl shadow-lg p-8 bg-white dark:bg-gray-900">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
                Let's Connect!
            </h2>
            {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Your Message"
                            required
                            className="w-full p-3 border rounded-md h-40 focus:ring focus:ring-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
                    >
                        Send Message
                    </button>
                </form>
            ) : (
                <div className="text-center">
                    <p className="text-green-600 text-2xl font-semibold mb-4">
                        Thank you for your message!
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        We'll get back to you as soon as possible.
                    </p>
                </div>
            )}
        </div>
    </section>
);
};

export default Contact;
