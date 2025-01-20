import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="w-full mx-auto h-96 flex justify-around items-center bg-slate-800">
        <div className="w-1/4">
          <h1 className="text-white text-3xl text-nowrap font-extrabold">PieChat - Chat with <br/> your freinds and more!</h1>
          <p className="text-gray-400 text-sm text-justify py-2">Welcome to PieChat, The fun and easy way to connect with your friends and family. Stay in touch, share stories and laughs, and creating lasting memories - all in one place. </p>
          <div className="flex items-center gap-5 my-4">
            <button className="text-gray-300 px-3 py-2 font-semibold shadow-slate-400 shadow rounded-sm">View on GitHub</button>
            <button className="text-gray-300 px-3 py-2 font-semibold shadow-slate-400 shadow rounded-sm">Start Chating</button>
          </div>
        </div>
        <div className="w-1/4">
          <Image src={'/chat-img.png'} width={300} height={300} alt="" />
        </div>
      </section>
      <section className="features py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Piechat?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-blue-500 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
              <p>
                Experience lightning-fast message delivery with our robust
                infrastructure.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-blue-500 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.172 21.142a2 2 0 01-2.828 0L9.343 16.657c-.726-.726-1.029-1.776-1.029-2.791s.302-2.065.827-2.791l5.197-5.197c.827-.827 2.02-1.131 2.906-.827l5.197 5.197c.779.779 1.029 1.893.827 2.906z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p>
                Your conversations are always encrypted for your peace of mind.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-blue-500 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Cross-Platform</h3>
              <p>
                Stay connected on all your devices - phones, tablets, and
                desktops.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export const metadata = {
  title: "Home - PieChat",
  description: "PieChat helps to connect people",
};
