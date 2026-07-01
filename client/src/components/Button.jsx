export const Button = ({ text = "", className = "", icon = "", type="" ,onClick}) => {
  return (    <button
  type={type}
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
