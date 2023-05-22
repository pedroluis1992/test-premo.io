import React from 'react';

interface IIcon {
  color?: string
}

export const ChevronUp = ({ color }: IIcon) => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7698 12.9952C14.4713 13.2823 13.9965 13.273 13.7094 12.9744L10 9.03667L6.29062 12.9744C6.00353 13.273 5.52875 13.2823 5.23017 12.9952C4.93159 12.7081 4.92228 12.2333 5.20937 11.9348L9.45937 7.43476C9.60078 7.2877 9.79599 7.20459 10 7.20459C10.204 7.20459 10.3992 7.2877 10.5406 7.43476L14.7906 11.9348C15.0777 12.2333 15.0684 12.7081 14.7698 12.9952Z" fill="black" />
  </svg>

)
