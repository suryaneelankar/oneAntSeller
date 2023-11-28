import {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';
import SvgIcon from 'react-native-svg-icon';

const SVGIcon = ({
  name,
  height,
  width,
  fill = 'transparent',
  ...otherProps
}) => {
  return (
    <SvgIcon
      svgs={SVGS}
      name={name}
      height={height}
      width={width}
      fill={fill}
      {...otherProps}
    />
  );
};

export default SVGIcon;

const SVGS = {
  antWhiteLogo: {
    svg: (
      <G>
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M32.8307 46.3232C41.7158 42.8055 48 34.1366 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C24.6691 48 25.3317 47.9726 25.9869 47.9189V24.5625H17.9948V20.0156C20.1041 19.9219 21.5807 19.7812 22.4244 19.5938C23.7682 19.2969 24.8619 18.7031 25.7057 17.8125C26.2838 17.2031 26.7213 16.3906 27.0182 15.375C27.1901 14.7656 27.276 14.3125 27.276 14.0156H32.8307V46.3232Z"
          fill="white"
        />
        <Path
          d="M60.0781 18.2188C61.8438 15.9688 64.875 14.8438 69.1719 14.8438C71.9688 14.8438 74.4531 15.3984 76.625 16.5078C78.7969 17.6172 79.8828 19.7109 79.8828 22.7891V34.5078C79.8828 35.3203 79.8984 36.3047 79.9297 37.4609C79.9766 38.3359 80.1094 38.9297 80.3281 39.2422C80.5469 39.5547 80.875 39.8125 81.3125 40.0156V41H74.0469C73.8438 40.4844 73.7031 40 73.625 39.5469C73.5469 39.0938 73.4844 38.5781 73.4375 38C72.5156 39 71.4531 39.8516 70.25 40.5547C68.8125 41.3828 67.1875 41.7969 65.375 41.7969C63.0625 41.7969 61.1484 41.1406 59.6328 39.8281C58.1328 38.5 57.3828 36.625 57.3828 34.2031C57.3828 31.0625 58.5938 28.7891 61.0156 27.3828C62.3438 26.6172 64.2969 26.0703 66.875 25.7422L69.1484 25.4609C70.3828 25.3047 71.2656 25.1094 71.7969 24.875C72.75 24.4688 73.2266 23.8359 73.2266 22.9766C73.2266 21.9297 72.8594 21.2109 72.125 20.8203C71.4062 20.4141 70.3438 20.2109 68.9375 20.2109C67.3594 20.2109 66.2422 20.6016 65.5859 21.3828C65.1172 21.9609 64.8047 22.7422 64.6484 23.7266H58.2031C58.3438 21.4922 58.9688 19.6562 60.0781 18.2188ZM65.0469 36.1719C65.6719 36.6875 66.4375 36.9453 67.3438 36.9453C68.7812 36.9453 70.1016 36.5234 71.3047 35.6797C72.5234 34.8359 73.1562 33.2969 73.2031 31.0625V28.5781C72.7812 28.8438 72.3516 29.0625 71.9141 29.2344C71.4922 29.3906 70.9062 29.5391 70.1562 29.6797L68.6562 29.9609C67.25 30.2109 66.2422 30.5156 65.6328 30.875C64.6016 31.4844 64.0859 32.4297 64.0859 33.7109C64.0859 34.8516 64.4062 35.6719 65.0469 36.1719ZM97.8594 20.3984C95.5938 20.3984 94.0391 21.3594 93.1953 23.2812C92.7578 24.2969 92.5391 25.5938 92.5391 27.1719V41H85.8828V15.5H92.3281V19.2266C93.1875 17.9141 94 16.9688 94.7656 16.3906C96.1406 15.3594 97.8828 14.8438 99.9922 14.8438C102.633 14.8438 104.789 15.5391 106.461 16.9297C108.148 18.3047 108.992 20.5938 108.992 23.7969V41H102.148V25.4609C102.148 24.1172 101.969 23.0859 101.609 22.3672C100.953 21.0547 99.7031 20.3984 97.8594 20.3984ZM126.875 36.2422V41.2344L123.711 41.3516C120.555 41.4609 118.398 40.9141 117.242 39.7109C116.492 38.9453 116.117 37.7656 116.117 36.1719V20.4453H112.555V15.6875H116.117V8.5625H122.727V15.6875H126.875V20.4453H122.727V33.9453C122.727 34.9922 122.859 35.6484 123.125 35.9141C123.391 36.1641 124.203 36.2891 125.562 36.2891C125.766 36.2891 125.977 36.2891 126.195 36.2891C126.43 36.2734 126.656 36.2578 126.875 36.2422Z"
          fill="white"
        />
      </G>
    ),
    viewBox: '0 0 129 48',
  },
  google: {
    svg: (
      <G>
        <G clip-path="url(#clip0_692_5320)">
          <Path
            d="M23.7135 12.2762C23.7135 11.4605 23.6474 10.6403 23.5063 9.83783H12.1875V14.4588H18.6692C18.4003 15.9492 17.536 17.2676 16.2705 18.1053V21.1037H20.1375C22.4083 19.0137 23.7135 15.9271 23.7135 12.2762Z"
            fill="#2A2A2A"
          />
          <Path
            d="M23.7135 12.2762C23.7135 11.4605 23.6474 10.6403 23.5063 9.83783H12.1875V14.4588H18.6692C18.4003 15.9492 17.536 17.2676 16.2705 18.1053V21.1037H20.1375C22.4083 19.0137 23.7135 15.9271 23.7135 12.2762Z"
            fill="white"
            fill-opacity="0.8"
          />
          <Path
            d="M12.1876 24.0008C15.4241 24.0008 18.1534 22.9382 20.142 21.1039L16.2751 18.1055C15.1992 18.8375 13.8102 19.252 12.192 19.252C9.06139 19.252 6.40697 17.1399 5.45456 14.3003H1.46411V17.3912C3.50122 21.4434 7.65041 24.0008 12.1876 24.0008Z"
            fill="#2A2A2A"
          />
          <Path
            d="M12.1876 24.0008C15.4241 24.0008 18.1534 22.9382 20.142 21.1039L16.2751 18.1055C15.1992 18.8375 13.8102 19.252 12.192 19.252C9.06139 19.252 6.40697 17.1399 5.45456 14.3003H1.46411V17.3912C3.50122 21.4434 7.65041 24.0008 12.1876 24.0008Z"
            fill="white"
            fill-opacity="0.8"
          />
          <Path
            d="M5.45004 14.3004C4.94737 12.81 4.94737 11.1962 5.45004 9.70587V6.61493H1.464C-0.238001 10.0057 -0.238001 14.0006 1.464 17.3913L5.45004 14.3004Z"
            fill="#2A2A2A"
          />
          <Path
            d="M5.45004 14.3004C4.94737 12.81 4.94737 11.1962 5.45004 9.70587V6.61493H1.464C-0.238001 10.0057 -0.238001 14.0006 1.464 17.3913L5.45004 14.3004Z"
            fill="white"
            fill-opacity="0.8"
          />
          <Path
            d="M12.1876 4.74966C13.8984 4.7232 15.5519 5.36697 16.7909 6.54867L20.217 3.12262C18.0476 1.0855 15.1683 -0.034466 12.1876 0.000808666C7.6504 0.000808666 3.50122 2.55822 1.46411 6.61481L5.45015 9.70575C6.39815 6.86173 9.05698 4.74966 12.1876 4.74966Z"
            fill="#2A2A2A"
          />
          <Path
            d="M12.1876 4.74966C13.8984 4.7232 15.5519 5.36697 16.7909 6.54867L20.217 3.12262C18.0476 1.0855 15.1683 -0.034466 12.1876 0.000808666C7.6504 0.000808666 3.50122 2.55822 1.46411 6.61481L5.45015 9.70575C6.39815 6.86173 9.05698 4.74966 12.1876 4.74966Z"
            fill="white"
            fill-opacity="0.8"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_692_5320">
            <Rect width="24" height="24" fill="white" />
          </ClipPath>
        </Defs>
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  facebook: {
    svg: (
      <G>
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 12.073C24 5.40577 18.6269 0 12 0C5.37309 0 0 5.40577 0 12.073C0 18.0984 4.38761 23.0933 10.1252 24V15.5636H7.07748V12.073H10.1252V9.41251C10.1252 6.38703 11.9173 4.7147 14.6578 4.7147C15.9707 4.7147 17.3444 4.95069 17.3444 4.95069V7.92186H15.8306C14.3406 7.92186 13.8748 8.85225 13.8748 9.80808V12.0729H17.2026L16.671 15.5636H13.8747V23.9999C19.6123 23.0949 24 18.1001 24 12.073Z"
          fill="#2A2A2A"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 12.073C24 5.40577 18.6269 0 12 0C5.37309 0 0 5.40577 0 12.073C0 18.0984 4.38761 23.0933 10.1252 24V15.5636H7.07748V12.073H10.1252V9.41251C10.1252 6.38703 11.9173 4.7147 14.6578 4.7147C15.9707 4.7147 17.3444 4.95069 17.3444 4.95069V7.92186H15.8306C14.3406 7.92186 13.8748 8.85225 13.8748 9.80808V12.0729H17.2026L16.671 15.5636H13.8747V23.9999C19.6123 23.0949 24 18.1001 24 12.073Z"
          fill="white"
          fill-opacity="0.8"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  close: {
    svg: (
      <G>
        <Path
          d="M18 6L6 18"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M6 6L18 18"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  downArrow: {
    svg: (
      <G>
        <Path
          d="M4 6L8 10L12 6"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 16 16',
  },
  search: {
    svg: (
      <G>
        <Path
          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
          stroke="#aaa"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
          stroke="#aaa"
          stroke-opacity="0.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M21 20.9999L16.65 16.6499"
          stroke="#aaa"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M21 20.9999L16.65 16.6499"
          stroke="#aaa"
          stroke-opacity="0.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  active_home: {
    svg: (
      <G>
        <Path
          d="M3.875 9L12.875 2L21.875 9V20C21.875 20.5304 21.6643 21.0391 21.2892 21.4142C20.9141 21.7893 20.4054 22 19.875 22H5.875C5.34457 22 4.83586 21.7893 4.46079 21.4142C4.08571 21.0391 3.875 20.5304 3.875 20V9Z"
          stroke="#2A2A2A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9.875 22V12H15.875V22"
          stroke="#2A2A2A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 25 24',
  },
  home: {
    svg: (
      <G>
        <Path
          d="M3.875 9L12.875 2L21.875 9V20C21.875 20.5304 21.6643 21.0391 21.2892 21.4142C20.9141 21.7893 20.4054 22 19.875 22H5.875C5.34457 22 4.83586 21.7893 4.46079 21.4142C4.08571 21.0391 3.875 20.5304 3.875 20V9Z"
          stroke="#aaa"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3.875 9L12.875 2L21.875 9V20C21.875 20.5304 21.6643 21.0391 21.2892 21.4142C20.9141 21.7893 20.4054 22 19.875 22H5.875C5.34457 22 4.83586 21.7893 4.46079 21.4142C4.08571 21.0391 3.875 20.5304 3.875 20V9Z"
          stroke="#aaa"
          stroke-opacity="0.6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9.875 22V12H15.875V22"
          stroke="#aaa"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9.875 22V12H15.875V22"
          stroke="#aaa"
          stroke-opacity="0.6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 25',
  },
  active_cart: {
    svg: (
      <G>
        <G clip-path="url(#clip0_731_30496)">
          <Path
            d="M9.375 22C9.92728 22 10.375 21.5523 10.375 21C10.375 20.4477 9.92728 20 9.375 20C8.82272 20 8.375 20.4477 8.375 21C8.375 21.5523 8.82272 22 9.375 22Z"
            stroke="#2A2A2A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M20.375 22C20.9273 22 21.375 21.5523 21.375 21C21.375 20.4477 20.9273 20 20.375 20C19.8227 20 19.375 20.4477 19.375 21C19.375 21.5523 19.8227 22 20.375 22Z"
            stroke="#2A2A2A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M1.375 1H5.375L8.055 14.39C8.14644 14.8504 8.39691 15.264 8.76255 15.5583C9.12818 15.8526 9.5857 16.009 10.055 16H19.775C20.2443 16.009 20.7018 15.8526 21.0675 15.5583C21.4331 15.264 21.6836 14.8504 21.775 14.39L23.375 6H6.375"
            stroke="#2A2A2A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_731_30496">
            <Rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0.375)"
            />
          </ClipPath>
        </Defs>
      </G>
    ),
    viewBox: '0 0 25 24',
  },
  cart: {
    svg: (
      <G>
        <G clip-path="url(#clip0_731_30288)">
          <Path
            d="M9.375 22C9.92728 22 10.375 21.5523 10.375 21C10.375 20.4477 9.92728 20 9.375 20C8.82272 20 8.375 20.4477 8.375 21C8.375 21.5523 8.82272 22 9.375 22Z"
            stroke="#aaa"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M9.375 22C9.92728 22 10.375 21.5523 10.375 21C10.375 20.4477 9.92728 20 9.375 20C8.82272 20 8.375 20.4477 8.375 21C8.375 21.5523 8.82272 22 9.375 22Z"
            stroke="#aaa"
            stroke-opacity="0.6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M20.375 22C20.9273 22 21.375 21.5523 21.375 21C21.375 20.4477 20.9273 20 20.375 20C19.8227 20 19.375 20.4477 19.375 21C19.375 21.5523 19.8227 22 20.375 22Z"
            stroke="#aaa"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M20.375 22C20.9273 22 21.375 21.5523 21.375 21C21.375 20.4477 20.9273 20 20.375 20C19.8227 20 19.375 20.4477 19.375 21C19.375 21.5523 19.8227 22 20.375 22Z"
            stroke="#aaa"
            stroke-opacity="0.6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M1.375 1H5.375L8.055 14.39C8.14644 14.8504 8.39691 15.264 8.76255 15.5583C9.12818 15.8526 9.5857 16.009 10.055 16H19.775C20.2443 16.009 20.7018 15.8526 21.0675 15.5583C21.4331 15.264 21.6836 14.8504 21.775 14.39L23.375 6H6.375"
            stroke="#aaa"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M1.375 1H5.375L8.055 14.39C8.14644 14.8504 8.39691 15.264 8.76255 15.5583C9.12818 15.8526 9.5857 16.009 10.055 16H19.775C20.2443 16.009 20.7018 15.8526 21.0675 15.5583C21.4331 15.264 21.6836 14.8504 21.775 14.39L23.375 6H6.375"
            stroke="#aaa"
            stroke-opacity="0.6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_731_30288">
            <Rect
              width="24"
              height="24"
              fill="#aaa"
              transform="translate(0.375)"
            />
          </ClipPath>
        </Defs>
      </G>
    ),
    viewBox: '0 0 25 24',
  },
  active_saved: {
    svg: (
      <G>
        <Path
          d="M19.625 21L12.625 16L5.625 21V5C5.625 4.46957 5.83571 3.96086 6.21079 3.58579C6.58586 3.21071 7.09457 3 7.625 3H17.625C18.1554 3 18.6641 3.21071 19.0392 3.58579C19.4143 3.96086 19.625 4.46957 19.625 5V21Z"
          stroke="#2A2A2A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 25 24',
  },
  saved: {
    svg: (
      <G>
        <Path
          d="M19.625 21L12.625 16L5.625 21V5C5.625 4.46957 5.83571 3.96086 6.21079 3.58579C6.58586 3.21071 7.09457 3 7.625 3H17.625C18.1554 3 18.6641 3.21071 19.0392 3.58579C19.4143 3.96086 19.625 4.46957 19.625 5V21Z"
          stroke="#aaa"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M19.625 21L12.625 16L5.625 21V5C5.625 4.46957 5.83571 3.96086 6.21079 3.58579C6.58586 3.21071 7.09457 3 7.625 3H17.625C18.1554 3 18.6641 3.21071 19.0392 3.58579C19.4143 3.96086 19.625 4.46957 19.625 5V21Z"
          stroke="#aaa"
          stroke-opacity="0.6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 25 24',
  },
  more: {
    svg: (
      <G>
        <Path
          d="M3.125 12H21.125"
          stroke="#aaa"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3.125 12H21.125"
          stroke="#aaa"
          stroke-opacity="0.6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3.125 6H21.125"
          stroke="#aaa"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3.125 6H21.125"
          stroke="#aaa"
          stroke-opacity="0.6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3.125 18H21.125"
          stroke="#aaa"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3.125 18H21.125"
          stroke="#aaa"
          stroke-opacity="0.6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 25 24',
  },
  active_more: {
    svg: (
      <G>
        <Path
          d="M3.125 12H21.125"
          stroke="#2A2A2A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3.125 6H21.125"
          stroke="#2A2A2A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3.125 18H21.125"
          stroke="#2A2A2A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 25 24',
  },
  charge: {
    svg: (
      <G>
        <Path
          d="M6.5 1L1.5 7H6L5.5 11L10.5 5H6L6.5 1Z"
          stroke="#9038FF"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M6.5 1L1.5 7H6L5.5 11L10.5 5H6L6.5 1Z"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 12 12',
  },
  all_category: {
    svg: (
      <G>
        <Path
          d="M10 3H3V10H10V3Z"
          stroke="#C9C1BA"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10 3H3V10H10V3Z"
          stroke="black"
          stroke-opacity="0.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M21 3H14V10H21V3Z"
          stroke="#C9C1BA"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M21 3H14V10H21V3Z"
          stroke="black"
          stroke-opacity="0.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M21 14H14V21H21V14Z"
          stroke="#C9C1BA"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M21 14H14V21H21V14Z"
          stroke="black"
          stroke-opacity="0.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10 14H3V21H10V14Z"
          stroke="#C9C1BA"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10 14H3V21H10V14Z"
          stroke="black"
          stroke-opacity="0.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  white_check: {
    svg: (
      <G>
        <Path
          d="M10.75 3L5.25 8.5L2.75 6"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 13 12',
  },
  save_white: {
    svg: (
      <G>
        <Path
          d="M12.6667 14L8.00004 10.6667L3.33337 14V3.33333C3.33337 2.97971 3.47385 2.64057 3.7239 2.39052C3.97395 2.14048 4.31309 2 4.66671 2H11.3334C11.687 2 12.0261 2.14048 12.2762 2.39052C12.5262 2.64057 12.6667 2.97971 12.6667 3.33333V14Z"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 16 16',
  },
  white_filter: {
    svg: (
      <G>
        <Path
          d="M3.33337 17.5001V11.6667"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3.33337 8.33333V2.5"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10 17.5V10"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10 6.66667V2.5"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16.6666 17.4999V13.3333"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16.6666 10V2.5"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M0.833374 11.6667H5.83337"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M7.5 6.66675H12.5"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.1666 13.3333H19.1666"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 20 20',
  },
  outerline_star: {
    svg: (
      <G>
        <Path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  calender_outline: {
    svg: (
      <G>
        <Path
          d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16 2V6"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8 2V6"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3 10H21"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  doolar: {
    svg: (
      <G>
        <Path
          d="M12 1V23"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  back_arrow: {
    svg: (
      <G>
        <Path
          d="M19 12H5"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12 19L5 12L12 5"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  share_outline: {
    svg: (
      <G>
        <Path
          d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8.58997 13.5098L15.42 17.4898"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M15.41 6.50977L8.58997 10.4898"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  save_outline: {
    svg: (
      <G>
        <Path
          d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  gift_yellow: {
    svg: (
      <G>
        <G clip-path="url(#clip0_723_21142)">
          <Path
            d="M13.3334 8V14.6667H2.66669V8"
            stroke="#C8811A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M14.6666 4.6665H1.33331V7.99984H14.6666V4.6665Z"
            stroke="#C8811A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M8 14.6665V4.6665"
            stroke="#C8811A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M7.99998 4.66683H4.99998C4.55795 4.66683 4.13403 4.49123 3.82147 4.17867C3.50891 3.86611 3.33331 3.44219 3.33331 3.00016C3.33331 2.55814 3.50891 2.13421 3.82147 1.82165C4.13403 1.50909 4.55795 1.3335 4.99998 1.3335C7.33331 1.3335 7.99998 4.66683 7.99998 4.66683Z"
            stroke="#C8811A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M8 4.66683H11C11.442 4.66683 11.866 4.49123 12.1785 4.17867C12.4911 3.86611 12.6667 3.44219 12.6667 3.00016C12.6667 2.55814 12.4911 2.13421 12.1785 1.82165C11.866 1.50909 11.442 1.3335 11 1.3335C8.66667 1.3335 8 4.66683 8 4.66683Z"
            stroke="#C8811A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_723_21142">
            <Rect width="16" height="16" fill="white" />
          </ClipPath>
        </Defs>
      </G>
    ),
    viewBox: '0 0 16 16',
  },
  clock_yellow: {
    svg: (
      <G>
        <G clip-path="url(#clip0_723_21145)">
          <Path
            d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
            stroke="#C8811A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M6 3V6L8 7"
            stroke="#C8811A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_723_21145">
            <Rect width="12" height="12" fill="white" />
          </ClipPath>
        </Defs>
      </G>
    ),
    viewBox: '0 0 12 12',
  },
  minus_black: {
    svg: (
      <G>
        <Path
          d="M5 12H19"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  plus_black: {
    svg: (
      <G>
        <Path
          d="M12 5V19"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M5 12H19"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  menu_black_outline: {
    svg: (
      <G>
        <Path
          d="M3 12H21"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3 6H21"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3 18H21"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  truck_black_outline: {
    svg: (
      <G>
        <Path
          d="M16 3H1V16H16V3Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16 8H20L23 11V16H16V8Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  shield_black_outline: {
    svg: (
      <G>
        <Path
          d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  upArrow: {
    svg: (
      <G>
        <Path
          d="M4 10L8 6L12 10"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 16 16',
  },
  cart_outline: {
    svg: (
      <G>
        <Path
          d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
          stroke="black"
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
          stroke="black"
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6"
          stroke="black"
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.5 2.2915V8.70817"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.5 2.2915V8.70817"
          stroke="black"
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M11.2916 5.5H17.7083"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M11.2916 5.5H17.7083"
          stroke="black"
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },

  user_plus_blue: {
    svg: (
      <G>
        <Path
          d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
          stroke="#006FFD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
          stroke="#006FFD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M20 8V14"
          stroke="#006FFD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M23 11H17"
          stroke="#006FFD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  copy_outerline: {
    svg: (
      <G>
        <Path
          d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },

  whatsapp: {
    svg: (
      <G>
        <G clip-path="url(#clip0_731_28513)">
          <Path
            d="M2.53333 15.6L3.12933 15.8987L3.31333 15.5293L3.06667 15.2L2.53333 15.6ZM4.4 17.4667L4.8 16.9333L4.47067 16.6867L4.10133 16.8707L4.4 17.4667ZM0.666667 19.3333L0.0706667 19.0347C0.00824998 19.1597 -0.0132892 19.3012 0.00909338 19.4392C0.031476 19.5771 0.0966483 19.7046 0.195399 19.8035C0.29415 19.9024 0.421485 19.9677 0.559406 19.9903C0.697328 20.0129 0.83886 19.9916 0.964 19.9293L0.666667 19.3333ZM6 6L5.63067 5.44533C5.53927 5.50616 5.4643 5.58861 5.41243 5.68537C5.36056 5.78214 5.33339 5.89021 5.33333 6H6ZM14 14V14.6667C14.1098 14.6666 14.2179 14.6394 14.3146 14.5876C14.4114 14.5357 14.4938 14.4607 14.5547 14.3693L14 14ZM0 10C0 12.2507 0.744 14.3293 2 16L3.06667 15.2C1.93894 13.7012 1.33043 11.8757 1.33333 10H0ZM10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10H1.33333C1.33333 7.70146 2.24643 5.49706 3.87174 3.87174C5.49706 2.24643 7.70146 1.33333 10 1.33333V0ZM20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0V1.33333C11.1381 1.33333 12.2651 1.5575 13.3166 1.99304C14.3681 2.42859 15.3235 3.06697 16.1283 3.87174C16.933 4.67652 17.5714 5.63192 18.007 6.68341C18.4425 7.7349 18.6667 8.86188 18.6667 10H20ZM10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10H18.6667C18.6667 11.1381 18.4425 12.2651 18.007 13.3166C17.5714 14.3681 16.933 15.3235 16.1283 16.1283C15.3235 16.933 14.3681 17.5714 13.3166 18.007C12.2651 18.4425 11.1381 18.6667 10 18.6667V20ZM4 18C5.7296 19.3008 7.83583 20.0029 10 20V18.6667C8.12431 18.6697 6.29876 18.0611 4.8 16.9333L4 18ZM0.964 19.9293L4.69733 18.0627L4.10133 16.8707L0.366667 18.7373L0.964 19.9293ZM1.936 15.3027L0.0693333 19.036L1.26133 19.632L3.12933 15.8987L1.936 15.3027ZM5.33333 6V7.33333H6.66667V6H5.33333ZM12.6667 14.6667H14V13.3333H12.6667V14.6667ZM5.33333 7.33333C5.33333 9.27826 6.10595 11.1435 7.48122 12.5188C8.85648 13.8941 10.7217 14.6667 12.6667 14.6667V13.3333C11.0754 13.3333 9.54924 12.7012 8.42403 11.576C7.29881 10.4508 6.66667 8.92463 6.66667 7.33333H5.33333ZM6.36933 6.55467L6.65467 6.36533L5.91467 5.256L5.63067 5.44533L6.36933 6.55467ZM7.68133 6.81067L7.868 7.92533L9.18267 7.70667L8.996 6.59067L7.68133 6.81067ZM7.58 8.59067L6.29733 9.44533L7.036 10.5547L8.31867 9.7L7.58 8.59067ZM7.868 7.92533C7.8893 8.0522 7.87345 8.18252 7.82235 8.30057C7.77125 8.41863 7.68708 8.51938 7.58 8.59067L8.31867 9.7C8.63944 9.48632 8.89164 9.18451 9.04492 8.83088C9.1982 8.47724 9.24604 8.08685 9.18267 7.70667L7.868 7.92533ZM6.65467 6.36533C6.74731 6.30374 6.85388 6.26631 6.96469 6.25645C7.0755 6.24659 7.18701 6.26462 7.28907 6.30889C7.39113 6.35316 7.48048 6.42226 7.549 6.5099C7.61751 6.59755 7.66301 6.70094 7.68133 6.81067L8.996 6.59067C8.94094 6.2614 8.80432 5.95115 8.59862 5.68821C8.39291 5.42527 8.12466 5.218 7.81832 5.08531C7.51198 4.95262 7.17729 4.89873 6.84478 4.92854C6.51227 4.95836 6.19252 5.07093 5.91467 5.256L6.65467 6.36533ZM14.5547 14.3693L14.744 14.0853L13.6347 13.3453L13.4453 13.6307L14.5547 14.3693ZM13.408 11.004L12.2933 10.8173L12.0747 12.1333L13.1893 12.3187L13.4093 11.004H13.408ZM10.3 11.6813L9.44533 12.964L10.5547 13.7027L11.4093 12.42L10.3 11.6813ZM12.2933 10.8173C11.9132 10.754 11.5228 10.8018 11.1691 10.9551C10.8155 11.1084 10.5137 11.3606 10.3 11.6813L11.4093 12.42C11.4806 12.3129 11.5814 12.2288 11.6994 12.1777C11.8175 12.1266 11.9478 12.1107 12.0747 12.132L12.2933 10.8173ZM14.744 14.0853C14.9291 13.8075 15.0416 13.4877 15.0715 13.1552C15.1013 12.8227 15.0474 12.488 14.9147 12.1817C14.782 11.8753 14.5747 11.6071 14.3118 11.4014C14.0489 11.1957 13.7386 11.0591 13.4093 11.004L13.1893 12.3187C13.2991 12.337 13.4025 12.3825 13.4901 12.451C13.5777 12.5195 13.6468 12.6089 13.6911 12.7109C13.7354 12.813 13.7534 12.9245 13.7435 13.0353C13.7337 13.1461 13.6963 13.2527 13.6347 13.3453L14.744 14.0853Z"
            fill="#2A2A2A"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_731_28513">
            <Rect width="20" height="20" fill="white" />
          </ClipPath>
        </Defs>
      </G>
    ),
    viewBox: '0 0 20 20',
  },

  facebook_outline: {
    svg: (
      <G>
        <Path
          d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },

  users: {
    svg: (
      <G>
        <Path
          d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
          stroke="#006FFD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
          stroke="#006FFD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M23 20.9999V18.9999C22.9993 18.1136 22.7044 17.2527 22.1614 16.5522C21.6184 15.8517 20.8581 15.3515 20 15.1299"
          stroke="#006FFD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799"
          stroke="#006FFD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  user_plus_black: {
    svg: (
      <G>
        <Path
          d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M20 8V14"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M23 11H17"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  edit: {
    svg: (
      <G>
        <Path
          d="M20 14.66V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H9.34"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M18 2L22 6L12 16H8V12L18 2Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  right_arrow: {
    svg: (
      <G>
        <Path
          d="M9 18L15 12L9 6"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  notification: {
    svg: (
      <G>
        <Path
          d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21M22 17H2C2.79565 17 3.55871 16.6839 4.12132 16.1213C4.68393 15.5587 5 14.7956 5 14V9C5 7.14348 5.7375 5.36301 7.05025 4.05025C8.36301 2.7375 10.1435 2 12 2C13.8565 2 15.637 2.7375 16.9497 4.05025C18.2625 5.36301 19 7.14348 19 9V14C19 14.7956 19.3161 15.5587 19.8787 16.1213C20.4413 16.6839 21.2044 17 22 17Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  setting: {
    svg: (
      <G>
        <G clip-path="url(#clip0_743_2983)">
          <Path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke="#2A2A2A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15V15Z"
            stroke="#2A2A2A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_743_2983">
            <Rect width="24" height="24" fill="white" />
          </ClipPath>
        </Defs>
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  become_a_supplier: {
    svg: (
      <G>
        <Path
          d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  tnc: {
    svg: (
      <G>
        <Path
          d="M8 6H21"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8 12H21"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8 18H21"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3 6H3.01"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3 12H3.01"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3 18H3.01"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  logout: {
    svg: (
      <G>
        <Path
          d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16 17L21 12L16 7"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M21 12H9"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  user_black: {
    svg: (
      <G>
        <Path
          d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M23 20.9999V18.9999C22.9993 18.1136 22.7044 17.2527 22.1614 16.5522C21.6184 15.8517 20.8581 15.3515 20 15.1299"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  done_green: {
    svg: (
      <G>
        <Path
          d="M22.5 11.0799V11.9999C22.4988 14.1563 21.8005 16.2545 20.5093 17.9817C19.2182 19.7088 17.4033 20.9723 15.3354 21.5838C13.2674 22.1952 11.0573 22.1218 9.03447 21.3744C7.01168 20.6271 5.28465 19.246 4.11096 17.4369C2.93727 15.6279 2.37979 13.4879 2.52168 11.3362C2.66356 9.18443 3.49721 7.13619 4.89828 5.49694C6.29935 3.85768 8.19279 2.71525 10.2962 2.24001C12.3996 1.76477 14.6003 1.9822 16.57 2.85986"
          stroke="#2F9461"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M22.5 4L12.5 14.01L9.5 11.01"
          stroke="#2F9461"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  setting_blue: {
    svg: (
      <G>
        <G clip-path="url(#clip0_775_2536)">
          <Path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke="#006FFD"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15V15Z"
            stroke="#006FFD"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_775_2536">
            <Rect width="24" height="24" fill="white" />
          </ClipPath>
        </Defs>
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  bell_blue: {
    svg: (
      <G>
        <Path
          d="M11.9417 17.5003C11.7952 17.7529 11.5849 17.9625 11.3319 18.1083C11.0789 18.254 10.792 18.3307 10.5 18.3307C10.208 18.3307 9.92118 18.254 9.66817 18.1083C9.41515 17.9625 9.20486 17.7529 9.05835 17.5003M18.8334 14.167H2.16669C2.82973 14.167 3.46561 13.9036 3.93445 13.4348C4.40329 12.9659 4.66669 12.33 4.66669 11.667V7.50033C4.66669 5.95323 5.28127 4.4695 6.37523 3.37554C7.46919 2.28157 8.95292 1.66699 10.5 1.66699C12.0471 1.66699 13.5308 2.28157 14.6248 3.37554C15.7188 4.4695 16.3334 5.95323 16.3334 7.50033V11.667C16.3334 12.33 16.5967 12.9659 17.0656 13.4348C17.5344 13.9036 18.1703 14.167 18.8334 14.167Z"
          stroke="#006FFD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 21 20',
  },
  UPI: {
    svg: (
      <G>
        <Path
          d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8.97768 9H10.1208V13.1225C10.1208 13.5744 10.014 13.9718 9.80033 14.3149C9.58877 14.6579 9.29093 14.926 8.90682 15.119C8.52271 15.3101 8.0739 15.4056 7.56038 15.4056C7.04482 15.4056 6.59498 15.3101 6.21087 15.119C5.82676 14.926 5.52892 14.6579 5.31735 14.3149C5.10578 13.9718 5 13.5744 5 13.1225V9H6.14308V13.027C6.14308 13.2899 6.2006 13.5241 6.31562 13.7295C6.43271 13.9349 6.59703 14.0961 6.8086 14.2132C7.02017 14.3282 7.27076 14.3857 7.56038 14.3857C7.85001 14.3857 8.1006 14.3282 8.31217 14.2132C8.52579 14.0961 8.69012 13.9349 8.80514 13.7295C8.92017 13.5241 8.97768 13.2899 8.97768 13.027V9Z"
          fill="#2A2A2A"
        />
        <Path
          d="M11.3632 15.3101V9H13.7295C14.2142 9 14.621 9.09038 14.9496 9.27114C15.2803 9.45189 15.5299 9.70043 15.6983 10.0168C15.8688 10.331 15.954 10.6884 15.954 11.089C15.954 11.4936 15.8688 11.8531 15.6983 12.1674C15.5278 12.4816 15.2762 12.7291 14.9434 12.9099C14.6107 13.0886 14.2009 13.178 13.7141 13.178H12.1458V12.2382H13.56C13.8435 12.2382 14.0756 12.1889 14.2564 12.0903C14.4371 11.9917 14.5706 11.8562 14.6569 11.6836C14.7452 11.5111 14.7894 11.3129 14.7894 11.089C14.7894 10.8651 14.7452 10.6679 14.6569 10.4974C14.5706 10.3269 14.4361 10.1944 14.2533 10.0999C14.0725 10.0034 13.8394 9.95514 13.5539 9.95514H12.5063V15.3101H11.3632Z"
          fill="#2A2A2A"
        />
        <Path d="M18.09 9V15.3101H16.9469V9H18.09Z" fill="#2A2A2A" />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  credit_card: {
    svg: (
      <G>
        <Path
          d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M1 10H23"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  globe: {
    svg: (
      <G>
        <Path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M2 12H22"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z"
          stroke="#2A2A2A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  // google: {
  //   svg: (
  //     <G>

  //     </G>
  //   ),
  //   viewBox: '0 0 24 24',
  // },
};
