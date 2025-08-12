import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

export default function CtaSection() {
  return (
    <section className="container mx-auto px-4 py-6 ">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Join the <span className="text-[#3B82F6]">Movement</span>
        </h2>

        <div className="flex w-fit flex-row justify-center mx-auto gap-4 mb-10">
          <a
            href="https://t.me/safubolt"
            className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">Launch Bot</span>
          </a>
        </div>

        <div className="flex justify-center items-center gap-2 mt-1">
          <a
            href="https://x.com/SafuboltBot?t=pEUvZTb8NPtFkjvHSc1GZg&s=08"
            className="p-3 rounded-full border border-black/50 dark:border-white/50 dark:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Twitter SVG */}
            <FaXTwitter className="text-black dark:text-white text-[15px]" />
          </a>

          <a
            href="https://t.me/+BAS4t9NsNWIxZTY0"
            className=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram className="text-black dark:text-white text-[40px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
