import Profile from "../components/Profile";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
   <Profile />
   <Projects />
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-semibold">Welcome Portfolio</h1>
        <p className="text-md mt-2 font-normal text-gray-500 text-center px-3">
          สวีดัด ท่านผู้รับชมทุกท่าน
        </p>
      </div>
    </>
  );
}
