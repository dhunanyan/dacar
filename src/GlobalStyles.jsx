import { css } from "styled-components";

export const SectionQueries = css`
  @media (max-width: 990px) {
    font-size: 34px;

    &:before {
      width: 100px;
      height: 3px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 15px;
  }

  @media (max-width: 450px) {
    font-size: 28px;

    &:before {
      width: 80px;
      height: 3px;
    }
  }
`;
