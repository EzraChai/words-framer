import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="relative h-[800px] bg-black "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[800px] sticky top-[calc(100vh-800px)]">
          <Content />
        </div>
      </div>
    </div>
  );
}

export function Content() {
  return (
    <div className="  ">
      <div className="p-12 text-xl">
        <div className="">About</div>
        <div className="flex flex-col">
          <Link href={"/about"}>About</Link>
        </div>
        <p className="text-neutral-400">
          Four former Matriculation batch 23/24 students from Negeri Sembilan
          and Kuala Lumpur going on a trip together to Negeri Sembilan.
        </p>
      </div>
      <h1 className=" p-4 md:p-12 absolute text-pink-400 bottom-0 text-[6rem] leading-[1] lg:text-[10rem] font-bold ">
        Road To Negeri Sembilan
      </h1>
      <div className="absolute bottom-0 text-neutral-400 left-0 px-2">
        Inspired by
        <Link
          className="hover:bg-pink-400 transition-all text-white p-1"
          href={"https://www.youtube.com/@olivierlarose1"}
        >
          Olivier Larose
        </Link>
      </div>
      <div className="absolute bottom-0 right-0 text-neutral-400  px-2">
        Copyright © 2024{" "}
        <Link
          className="hover:bg-pink-400 transition-all  text-white p-1"
          href={"https://dub.sh/ezrachai"}
        >
          Ezra Chai
        </Link>
      </div>
    </div>
  );
}
