import styled from "styled-components";

import React from "react";
import PropTypes from "prop-types";
import QuizLogoAlura from "./alura_quiz";

function Logo({ className, quizDaGalera }) {
  return (
    <div>
      {!quizDaGalera && (
        <img
          className={className}
          width="318.75"
          height="133.45"
          src="/avengers_end_game.png"
          alt="logo_avengers_end_game"
        />
      )}
      {quizDaGalera && <QuizLogoAlura />}
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
  quizDaGalera: PropTypes.bool,
};

Logo.defaultProps = {
  quizDaGalera: false,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
    opacity: 0;
  }
`;

export default QuizLogo;
