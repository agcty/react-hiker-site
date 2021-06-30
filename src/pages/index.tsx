import Walkthrough from "@components/Walkthrough"
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-hiker-800 to-white bg-opacity-10">
      <div className="container flex flex-col items-center  ">
        <div className="relative my-12 text-center duration-200">
          <h1 className="text-3xl font-bold md:text-4xl animate-enter text-toast-900">
            The Fittest Walkthrough.
          </h1>
          <h2 className="mt-2 text-xl font-bold md:text-2xl text-toast-600">
            Create custom stepper experiences
          </h2>
        </div>

        <Walkthrough />

        <Features />
        <Steps />
      </div>
    </div>
  )
}

const Features = () => (
  <div className="my-12 grid gap-x-8 gap-y-5 grid-cols-2 md:grid-cols-3">
    <Feature>Easy to use</Feature>
    <Feature>Lighweight</Feature>
    <Feature>Accessible</Feature>
    <Feature>Customizable</Feature>
    <Feature>Headless Hooks</Feature>
    <Feature>Branching</Feature>
    <Feature>Open Source</Feature>
    <Feature>Quick setup</Feature>
    <Feature>Compund Component</Feature>
  </div>
)

function Feature({ children }) {
  return (
    <div className="flex items-center gap-1">
      <Checkmark />
      <span className="font-bold">{children}</span>
    </div>
  )
}

function Checkmark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}

const Step: React.FC<{
  count: number
  title: string
  subTitle: string
  code: JSX.Element
}> = (props) => (
  <div className="flex flex-col items-center gap-1">
    <div className="flex items-center justify-center w-6 h-6 mb-2 text-sm rounded-full bg-toast-900 text-toast-50">
      {props.count}
    </div>
    <div className="font-bold">{props.title}</div>
    <div className="text-sm text-red-700">{props.subTitle}</div>
    <code className="w-full px-4 py-2 mt-2 font-bold text-center bg-white border rounded border-toast-200">
      {props.code}
    </code>
  </div>
)

const Steps = () => (
  <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
    <Step
      count={1}
      title="Install package"
      subTitle="It weighs less than 5kb"
      code={
        <code>
          <span className="text-toast-600">yarn add</span>{" "}
          <span className="text-toast-800">react-hiker</span>
        </code>
      }
    ></Step>
    <Step
      count={2}
      title="Add Toaster to your app"
      subTitle="Make sure it's placed at the top"
      code={
        <>
          <span className="text-toast-600">{"<div>"}</span>
          <span className="text-toast-800">{"<Toaster/>"}</span>
          <span className="text-toast-600">{"</div>"}</span>
        </>
      }
    ></Step>
    <Step
      count={3}
      title="Start toasting!"
      subTitle="Call it from anywhere"
      code={
        <>
          <span className="text-toast-600">{"toast"}</span>
          <span className="text-toast-800">{'("Hello World")'}</span>
        </>
      }
    ></Step>
  </div>
)
