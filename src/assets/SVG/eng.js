import React from "react";
import Svg, { Path } from "react-native-svg";

const English = ({ height = 24, width = 24 }) => {
  return (
    <Svg
      width="45"
      height="30"
      viewBox="0 0 29 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M17.0833 7.81158V6.04633C17.7937 5.74494 18.5203 5.5189 19.263 5.3682C20.0057 5.21751 20.7861 5.14216 21.6042 5.14216C22.1639 5.14216 22.7128 5.18522 23.251 5.27133C23.7892 5.35744 24.3167 5.46508 24.8333 5.59424V7.23033C24.3167 7.03658 23.7946 6.89127 23.2672 6.79439C22.7397 6.69752 22.1854 6.64908 21.6042 6.64908C20.7861 6.64908 20.0003 6.75134 19.2469 6.95585C18.4934 7.16037 17.7722 7.44561 17.0833 7.81158ZM17.0833 14.9157V13.129C17.7937 12.8348 18.5203 12.6141 19.263 12.467C20.0057 12.3199 20.7861 12.2463 21.6042 12.2463C22.1639 12.2463 22.7128 12.2894 23.251 12.3755C23.7892 12.4616 24.3167 12.5692 24.8333 12.6984V14.3345C24.3167 14.1407 23.7946 13.9954 23.2672 13.8986C22.7397 13.8017 22.1854 13.7532 21.6042 13.7532C20.7861 13.7532 20.0003 13.8501 19.2469 14.0439C18.4934 14.2376 17.7722 14.5282 17.0833 14.9157ZM17.0833 11.3637V9.59841C17.7937 9.29702 18.5203 9.07098 19.263 8.92029C20.0057 8.76959 20.7861 8.69424 21.6042 8.69424C22.1639 8.69424 22.7128 8.7373 23.251 8.82341C23.7892 8.90952 24.3167 9.01716 24.8333 9.14633V10.7824C24.3167 10.5887 23.7946 10.4434 23.2672 10.3465C22.7397 10.2496 22.1854 10.2012 21.6042 10.2012C20.7861 10.2012 20.0003 10.3034 19.2469 10.5079C18.4934 10.7125 17.7722 10.9977 17.0833 11.3637ZM7.13749 16.3366C8.24352 16.3366 9.32014 16.464 10.3674 16.7187C11.4146 16.9735 12.4477 17.3556 13.4667 17.8651V4.43174C12.5266 3.82897 11.5139 3.36611 10.4287 3.04317C9.3434 2.72025 8.24634 2.55879 7.13749 2.55879C6.33377 2.55879 5.54262 2.65208 4.76405 2.83866C3.98545 3.02525 3.21224 3.26923 2.44441 3.57062V17.1762C3.14049 16.8892 3.89576 16.6775 4.71022 16.5411C5.52468 16.4048 6.33377 16.3366 7.13749 16.3366ZM15.6194 17.8651C16.6528 17.3556 17.6735 16.9735 18.6818 16.7187C19.69 16.464 20.7502 16.3366 21.8625 16.3366C22.6662 16.3366 23.4825 16.4012 24.3113 16.5304C25.1401 16.6595 25.8882 16.8389 26.5556 17.0686V3.57062C25.8308 3.22273 25.0696 2.96712 24.2721 2.80379C23.4745 2.64046 22.6713 2.55879 21.8625 2.55879C20.7502 2.55879 19.6666 2.72025 18.6118 3.04317C17.5569 3.36611 16.5595 3.82897 15.6194 4.43174V17.8651ZM14.562 21.3069C13.4798 20.494 12.3078 19.8565 11.046 19.3945C9.78412 18.9324 8.48129 18.7014 7.13749 18.7014C6.32578 18.7014 5.52858 18.8067 4.7459 19.0174C3.96319 19.2281 3.19307 19.4933 2.43553 19.8131C1.89496 20.0825 1.36947 20.0583 0.859048 19.7404C0.348646 19.4225 0.0934448 18.9601 0.0934448 18.3532V3.20537C0.0934448 2.85281 0.174992 2.52623 0.338087 2.22564C0.501181 1.92507 0.745833 1.69426 1.07204 1.53321C2.0152 1.07738 2.9945 0.741666 4.00994 0.526066C5.02538 0.310487 6.0617 0.202698 7.11889 0.202698C8.4465 0.202698 9.73813 0.379364 10.9938 0.7327C12.2494 1.08604 13.4325 1.62751 14.543 2.35713C15.6409 1.63266 16.8101 1.09247 18.0506 0.736575C19.291 0.380656 20.5678 0.202698 21.8811 0.202698C22.9334 0.202698 23.9649 0.311778 24.9756 0.529941C25.9863 0.748103 26.9632 1.08253 27.9064 1.53321C28.2326 1.69426 28.4808 1.92507 28.6511 2.22564C28.8214 2.52623 28.9065 2.85281 28.9065 3.20537V18.4484C28.9065 19.0637 28.6451 19.5235 28.1222 19.8279C27.5993 20.1322 27.0728 20.1273 26.5429 19.8131C25.7997 19.4789 25.0368 19.2101 24.2541 19.0066C23.4714 18.8031 22.6742 18.7014 21.8625 18.7014C20.527 18.7014 19.2456 18.9373 18.0184 19.4091C16.7911 19.8809 15.639 20.5135 14.562 21.3069Z"
        fill="white"
      />
    </Svg>
  );
};
export default English;
