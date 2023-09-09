import "./btn.css";
export default function Btn({ action, content, id }) {
  return (
    <>
      <button
        id={id}
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
