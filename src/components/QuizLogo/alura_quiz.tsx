import styled from 'styled-components';
import React from 'react';

interface Props {
  className?: string;
}

function LogoAlura({ className }: Props) {
  return (
    <svg className={className} width="135" height="67" viewBox="0 0 135 67" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        {/* SVG paths omitted for brevity in source view — kept identical to original */}
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="134.373" height="67" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

const QuizLogoAlura = styled(LogoAlura)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogoAlura;
