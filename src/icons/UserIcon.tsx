import * as React from "react";

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M16 17c-4.227 0-7.667-3.44-7.667-7.667 0-4.226 3.44-7.666 7.667-7.666s7.667 3.44 7.667 7.666C23.667 13.56 20.227 17 16 17zm0-13.333a5.679 5.679 0 00-5.667 5.666A5.68 5.68 0 0016 15a5.68 5.68 0 005.667-5.667A5.679 5.679 0 0016 3.667zM27.453 30.333c-.546 0-1-.453-1-1C26.453 24.733 21.76 21 16 21S5.547 24.733 5.547 29.333c0 .547-.453 1-1 1-.547 0-1-.453-1-1C3.547 23.64 9.134 19 16 19c6.867 0 12.453 4.64 12.453 10.333 0 .547-.453 1-1 1z"
        fill="#3A3A3A"
      />
    </svg>
  );
}

export const MemoUserIcon = React.memo(UserIcon);
