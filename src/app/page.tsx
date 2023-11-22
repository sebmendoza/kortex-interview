import NotesExplorer from "./components/NotesExplorer";
import { CheckIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="flex lg:h-screen flex-col items-center p-24 text-white overflow-hidden">
      <h1 className="text-4xl font-bold text-center mb-16">
        Kortex Notes Explorer ~ Sebastian M.
      </h1>

      <section className="flex flex-col md:flex-row items-center w-full justify-evenly gap-8">
        <div className="w-96 flex-col gap-8 rounded-xl p-4 shadow shadow-kortex-purple text-white max-w-xs  lg:max-w-none">
          <div>
            <h3 className="text-3xl font-semibold mb-3">Main Requirements</h3>
            <ul className="flex flex-col gap-y-2">
              <ul className="flex flex-col gap-y-2">
                <li className="flex items-center space-x-2">
                  <span>Child notes are indented (faint gray circle)</span>
                  <CheckIcon className="w-8 h-8 text-green-400" />
                </li>
                <li className="flex items-center space-x-2">
                  <span>Notes are selected when clicked on (see url)</span>
                  <CheckIcon className="w-8 h-8 text-green-400" />
                </li>
                <li className="flex items-center space-x-2">
                  <span>Notes without children have no arrow</span>
                  <CheckIcon className="w-8 h-8 text-green-400" />
                </li>
                <li className="flex items-center space-x-2">
                  <span>Documents have hover feedback</span>
                  <CheckIcon className="w-8 h-8 text-green-400" />
                </li>
              </ul>
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-3">Bonus Requirements</h3>
            <ul className="flex flex-col gap-y-2">
              <li className="flex items-center space-x-2">
                <span className="w-80">
                  Notes can be expanded/unexpanded to reveal/hide child notes
                </span>
                <CheckIcon className="w-8 h-8 text-green-400" />
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-80">
                  On right-click, a menu should appear with different options
                  including Add Note, Delete Note, and Rename Note
                </span>
                <CheckIcon
                  className="w-8 h-8 text-green-400"
                  fontSize={"40px"}
                />
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl mb-2">Tech used</h3>
            <ul>
              <li>NextJS</li>
              <li>Tailwind</li>
              <li>Radix UI</li>
            </ul>
          </div>
        </div>

        <div>
          <NotesExplorer />
        </div>
      </section>
    </main>
  );
}
