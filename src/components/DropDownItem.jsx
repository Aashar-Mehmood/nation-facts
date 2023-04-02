export default function DropDownItem({ value, handleClick }) {
  return (
    <button
      className="
      px-4 py-1 hover:cursor-pointer
      hover:bg-darkElementBg hover:text-darkText 
      dark:hover:bg-lightElementBg dark:hover:text-lightText 
      focus:bg-darkElementBg focus:text-darkText 
      dark:focus:bg-lightElementBg dark:focus:text-lightText
      text-start w-full rounded-md"
      value={value}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
