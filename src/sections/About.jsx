import { useRef } from "react";
import Card from "../components/card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef(null);
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-
           [1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p>
              Hi, I'm <span className="text-orange">Oruzgan Marangka</span>
            </p>
            <p>
              A <span className="text-orange">Freelancer</span> who’s falling in
              love with code and design. Still messing up sometimes, but slowly
              building things that look good and actually work.
            </p>
          </div>
        </div>

        {/* grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500 select-none">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Design Pattern"
              image={undefined}
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Design Principles"
              image={undefined}
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="GRASP"
              image={undefined}
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="SOLID"
              image={undefined}
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "20deg", top: "10%", left: "40%" }}
              text="SRP"
              image={undefined}
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              text={undefined}
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              text={undefined}
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              text={undefined}
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              Based in Indonesia (GMT+8). Typically available 09:00–18:00;
              flexible with time zones.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe className={undefined} />
          </figure>
        </div>

        {/* grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* grid 5 */}

        <div className="grid-default-color grid-5">
          {" "}
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.{" "}
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
