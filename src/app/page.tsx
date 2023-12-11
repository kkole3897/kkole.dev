import { FaGithub } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

export default function Home() {
  return (
    <main className="flex flex-col flex-1 justify-center">
      <div className="mb-[8px] font-mono text-xl">Hello, I am</div>
      <div className="font-mono text-7xl">Jin Kwan Kim</div>
      <div className="text-blue-500 font-mono text-4xl">
        &gt; Frontend Developer
      </div>
      <div className="flex gap-[12px] mt-[24px]">
        <a
          href="https://github.com/kkole3897"
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 hover:text-gray-500"
        >
          <FaGithub size="28" />
        </a>
        <a
          href="mailto:kkole3897@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 hover:text-gray-500"
        >
          <IoMail size="28" />
        </a>
      </div>
    </main>
  );
}
