import "./btn.css";
export default function Btn({ action, content, id, theme }) {
  return (
    <>
      <button
        id={id}
        onClick={() => {
          action();
        }}
        className={`font-bold m-3 h-[3.8rem] w-[7rem] rounded-xl  text-[2.2rem] ${theme}`}
      >
        {content}
      </button>
    </>
  );
}
