"use client";

import { useRef } from "react";
// import { EmailService } from '@/utils/emailUtils';

const ContactUsForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  // const [status, setStatus] = useState<
  //   "success" | "error" | "submitting" | "idle"
  // >("idle");
  // const [message, setMessage] = useState<string | null>(null);
  // const emailInstance = new EmailService();
  const status = "idle";
  // const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
  //   if (status === "submitting") return;
  //   e.preventDefault();
  //   if (!form.current) return;
  //   emailInstance.sendMail({
  //     form: form.current,
  //     onSuccess: (emailService) => {
  //       console.log(emailService.text);
  //       setStatus("success");
  //       setMessage("Message sent successfully!");
  //       form.current?.reset();
  //     },
  //     onFail: () => {
  //       setStatus("error");
  //       setMessage("Failed to send message. Please try again.");
  //     },
  //     onError: (error) => {
  //       console.error(error);
  //       setStatus("error");
  //       setMessage("Something went wrong. Please try again.");
  //     },
  //   });
  //   setTimeout(() => {
  //     setMessage(null);
  //     setStatus("idle");
  //   }, 5000);
  // };

  const sendEmail = () => {
    console.log("send email");
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Message Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let’s Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Have a question, a project idea, or just want to explore
            collaboration? Reach out and we’ll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Send Us a Message
          </h3>
          {status !== "idle" && status !== "submitting" && (
            <div
              className={`transition-all duration-300 mb-4 p-4 rounded-lg text-sm font-medium ${
                status === "success"
                  ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-white"
                  : "bg-red-100 text-red-800 dark:bg-red-800 dark:text-white"
              }`}
            >
              {/* {message} */}
            </div>
          )}
          <form className="space-y-6" onSubmit={sendEmail} ref={form}>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                required
                type="email"
                className="w-full px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                required
                rows={5}
                className="w-full px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>
            <button
              // disabled={status === "submitting"}
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
