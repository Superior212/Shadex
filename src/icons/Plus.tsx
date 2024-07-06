import * as React from "react";

function Plus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75z"
        fill="#3A3A3A"
      />
      <path
        d="M12 18.75c-.41 0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75s.75.34.75.75v12c0 .41-.34.75-.75.75z"
        fill="#292D32"
      />
    </svg>
  );
}

const MemoPlus = React.memo(Plus);
export default MemoPlus;
