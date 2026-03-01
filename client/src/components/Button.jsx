export const Button = ({ text = "", className = "", onClick, icon = "" }) => {
  return (    <button
      onClick={onClick}
      className={`px-6 py-2 text-sm font-semibold rounded-xl
                  flex items-center justify-center gap-2 cursor-pointer
                  ${className}`}
    >
      {icon && (
        <span className="material-symbols-outlined text-base leading-none">
          {icon}
        </span>
      )}
      <span>{text}</span>
    </button>
  );
};
