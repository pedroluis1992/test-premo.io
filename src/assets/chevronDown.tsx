import React from 'react';

interface IIcon {
  color?: string
}

export const ChevronDown = ({ color }: IIcon) => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.23017 7.41397C5.52875 7.12687 6.00353 7.13618 6.29063 7.43476L10 11.3725L13.7094 7.43476C13.9965 7.13618 14.4713 7.12687 14.7698 7.41397C15.0684 7.70106 15.0777 8.17584 14.7906 8.47442L10.5406 12.9744C10.3992 13.1215 10.204 13.2046 10 13.2046C9.79599 13.2046 9.60078 13.1215 9.45938 12.9744L5.20938 8.47442C4.92228 8.17584 4.93159 7.70106 5.23017 7.41397Z" fill="black" />
  </svg>

)
