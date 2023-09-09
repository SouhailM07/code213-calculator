import "./btn.css";
export default function Btn({ action, content }) {
  return (
    <>
      <button
        onClick={() => {
          action();
        }}
        className="border-2 m-3 border-red-500 h-[3.8rem] w-[7rem] rounded-xl  text-[2rem]"
      >
        {content}
      </button>
    </>
  );
}
