const Close = ({ color, className }) => {
  return (
    <svg
      width="34"
      height="34"
      color={color}
      className={className}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="34" height="34" fill="white" />
      <circle cx="17" cy="17" r="12.75" stroke="#333333" />
      <path d="M12.75 21.2495L21.25 12.7495" stroke="#333333" />
      <path d="M21.25 21.25L12.75 12.75" stroke="#333333" />
    </svg>
  );
};

export default Close;
