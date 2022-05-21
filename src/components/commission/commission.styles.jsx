import styled from "styled-components";

export const CommissionContainer = styled.div`
  min-width: 270px;
  min-height: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: rgba(54, 54, 54, 0.95);
  padding: 15px;
  margin: 0 0 auto 0;
`;

export const CommissionTitle = styled.h3`
  color: #f1f1f1;
  font-size: 34px;
`;

export const CommissionSubtitle = styled.h4`
  color: #74d680;
  font-size: 28px;
  margin: 5px 0 15px 0;
`;

export const CommissionContent = styled.p`
  margin: auto 0 10px auto;
  font-size: 14px;
  color: #f0f0f0;

  span {
    font-size: 16px;
    padding: 4px 8px;
    background: linear-gradient(135deg, #74d680, #67a26f);
    color: #f1f1f1;
    border-radius: 10px;
  }
`;
