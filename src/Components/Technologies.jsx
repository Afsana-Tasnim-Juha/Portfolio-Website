import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiBootstrap, SiExpress, SiGit, SiHtml5, SiJavascript, SiJquery, SiMongodb, SiMysql, SiPhp, SiReactrouter, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


const Technologies = () => {
    return <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-3xl text-cyan-400"></RiReactjsLine>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-3xl "></TbBrandNextjs>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-3xl text-green-500"></SiMongodb>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-3xl text-cyan-400"></FaNodeJs>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiHtml5 className="text-3xl text-orange-400"></SiHtml5>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss className="text-3xl text-blue-400"></SiTailwindcss>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJavascript className="text-3xl text-yellow-400"></SiJavascript>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className="text-3xl text-black-400"></SiExpress>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiBootstrap className="text-3xl text-purple-600"></SiBootstrap>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-3xl text-green-400"></SiMysql>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiReactrouter className="text-3xl text-cyan-400"></SiReactrouter>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPhp className="text-3xl text-sky-600"></SiPhp>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiGit className="text-3xl text-orange-600"></SiGit>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJquery className="text-3xl text-sky-600"></SiJquery>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTypescript className="text-3xl text-sky-500"></SiTypescript>
            </div>
        </div>
    </div>
};

export default Technologies;