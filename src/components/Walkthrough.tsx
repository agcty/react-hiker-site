import clsx from "clsx"
import { Hiker, useHikerContext } from "react-hiker"

function Walkthrough() {
  return (
    <div className="bg-white shadow-md rounded-md">
      <Hiker>
        <Nav />

        <Hiker.Step id="1">
          <div className="p-8">Test</div>
        </Hiker.Step>

        <Hiker.Step id="2">
          <div className="p-8">Test</div>
        </Hiker.Step>

        <Hiker.Step id="3">
          <div className="p-8">Test</div>
        </Hiker.Step>

        <Hiker.Step id="4">
          <div className="p-8">Test</div>
        </Hiker.Step>

        <div className="py-4 mt-5">
          <Waypoints />
        </div>
      </Hiker>
    </div>
  )
}

function Waypoints() {
  const { length, activeIndex, activeStep } = useHikerContext()

  return (
    <div className="flex justify-center">
      <div className="flex space-x-3">
        {Array.from(Array(length), (e, i) => (
          <div
            className={clsx("w-2 h-2 bg-blue-400 rounded-full transition", {
              "bg-blue-400 rounded-full ring-2 ring-blue-300":
                activeIndex === i,
            })}
            key={i}
          />
        ))}
      </div>
    </div>
  )
}

function Nav() {
  return (
    <div className="border-b border-gray-300">
      <div className="px-4 py-3 grid grid-cols-3 gap-4">
        <Hiker.Button>
          {({ back }) => (
            <button
              className="font-semibold text-blue-500 hover:text-blue-400 focus:outline-none"
              onClick={() => back()}
            >
              Back
            </button>
          )}
        </Hiker.Button>

        <h3 className="font-bold text-black">What's new?</h3>

        <Hiker.Button>
          {({ next }) => (
            <button
              className="font-semibold text-blue-500 hover:text-blue-400 focus:outline-none"
              onClick={() => next()}
            >
              Next
            </button>
          )}
        </Hiker.Button>
      </div>
    </div>
  )
}

export default Walkthrough
