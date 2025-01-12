interface SvgProps {
  color?: string;
  height?: string;
  width?: string;
}

const LockIcon = ({
  color = "#000000",
  height = "10px",
  width = "12px",
}: SvgProps) => {
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
      enable-background="new 0 0 52 52"
    >
      <g>
        <path
          d="M11,19h4c0.6,0,1-0.3,1-0.9V18c0-5.7,4.9-10.4,10.7-10C32,8.4,36,13,36,18.4v-0.3c0,0.6,0.4,0.9,1,0.9h4
            c0.6,0,1-0.3,1-0.9V18c0-9.1-7.6-16.4-16.8-16c-8.5,0.4-15,7.6-15.2,16.1C10.1,18.6,10.5,19,11,19z"
        />
        <path d="M10,18.1v0.4C10,18.4,10,18.3,10,18.1L10,18.1z" />
        <path
          d="M46,27c0-2.2-1.8-4-4-4H10c-2.2,0-4,1.8-4,4v19c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V27z M30.6,42.7
            c0.2,0.6-0.3,1.3-1,1.3h-7.3c-0.7,0-1.1-0.6-1-1.3l1.8-6c-1.5-1-2.4-2.8-2.1-4.8c0.4-1.9,1.9-3.4,3.9-3.8c3.2-0.6,6,1.7,6,4.7
            c0,1.6-0.8,3.1-2.1,3.9L30.6,42.7z"
        />
      </g>
    </svg>
  );
};

export default LockIcon;
