interface SvgProps {
  color?: string;
  height?: string;
  width?: string;
}

const Reset = ({
  color = "#000000",
  height = "10px",
  width = "12px",
}: SvgProps) => {
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.75 8a4.5 4.5 0 0 1-8.61 1.834l-1.391.565A6.001 6.001 0 0 0 14.25 8 6 6 0 0 0 3.5 4.334V2.5H2v4l.75.75h3.5v-1.5H4.352A4.5 4.5 0 0 1 12.75 8z"
      />
    </svg>
  );
};

export default Reset;
