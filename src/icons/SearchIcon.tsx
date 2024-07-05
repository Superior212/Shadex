import * as React from "react";

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M15.333 29C7.8 29 1.667 22.867 1.667 15.333 1.667 7.8 7.8 1.667 15.333 1.667 22.867 1.667 29 7.8 29 15.333 29 22.867 22.867 29 15.333 29zm0-25.333c-6.44 0-11.666 5.24-11.666 11.666C3.667 21.76 8.893 27 15.333 27S27 21.76 27 15.333c0-6.426-5.227-11.666-11.667-11.666zM29.333 30.333a.989.989 0 01-.706-.293l-2.667-2.667a1.006 1.006 0 010-1.413 1.006 1.006 0 011.413 0l2.667 2.667a1.006 1.006 0 010 1.413c-.2.2-.453.293-.707.293z"
        fill="#3A3A3A"
      />
    </svg>
  );
}

const MemoSearchIcon = React.memo(SearchIcon);
export default MemoSearchIcon;
