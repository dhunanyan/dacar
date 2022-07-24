import styled from "styled-components";

export const ContactWrapper = styled.section`
  background: linear-gradient(0deg, #393b44, #737b84);
  position: relative;
  overflow: hidden;
`;
export const ContactContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ContactForm = styled.form`
  padding: 15px;
  max-width: 700px;
  width: 100%;
  flex-grow: 100;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  background: linear-gradient(
    to left top,
    rgba(248, 248, 248, 0.5),
    rgba(248, 248, 248, 0.7)
  );
  border-radius: 20px;
  box-shadow: 6px 6px 20px rgba(48, 48, 48, 0.2);
  backdrop-filter: blur(12px);
  z-index: 1;
  text-align: center;
  padding: 10px 18px;

  @media (max-width: 768px) {
    min-width: calc(100% - 30px);
  }
`;

export const ContactInput = styled.input`
  color: #303030;
  border-radius: 8px;
  background: linear-gradient(
    to left top,
    rgba(248, 248, 248, 0.3),
    rgba(248, 248, 248, 0.5)
  );
  box-shadow: 6px 6px 20px rgba(48, 48, 48, 0.2);
  backdrop-filter: blur(12px);
  padding: 8px 16px;
  width: calc(100% - 32px);
  margin: 8px 0;
  border: rgba(220, 220, 220, 0) solid 3px;
  transition: all 150ms ease-out;

  &:focus,
  &:active {
    border: rgba(218, 218, 218, 0.95) solid 3px;
  }
`;

export const ContactTextarea = styled.textarea`
  color: #303030;
  border-radius: 8px;
  background: linear-gradient(
    to left top,
    rgba(248, 248, 248, 0.3),
    rgba(248, 248, 248, 0.5)
  );
  box-shadow: 6px 6px 20px rgba(48, 48, 48, 0.2);
  backdrop-filter: blur(12px);
  padding: 8px 16px;
  margin: 8px 0;
  min-height: 250px;
  max-height: 250px;
  max-width: calc(100% - 32px);
  min-width: calc(100% - 32px);
  border: rgba(218, 218, 218, 0) solid 3px;
  transition: all 150ms ease-out;

  &:focus,
  &:active {
    border: rgba(218, 218, 218, 0.95) solid 3px;
  }
`;

export const ContactButton = styled.button`
  color: #303030;
  border-radius: 8px;
  background-color: rgba(115, 214, 126, 0.9);
  box-shadow: 6px 6px 20px rgba(48, 48, 48, 0.2);
  backdrop-filter: blur(12px);
  padding: 12px 30px;
  margin: 25px 0 8px 0;
  justify-self: flex-end;
  font-size: 18px;
  font-weight: 600;
  color: #f1f1f1;
  transition: all 100ms ease-out;
  width: 100%;
  max-width: 300px;

  &:hover {
    transform: translate(10px, 0);
    background-color: rgba(115, 214, 126, 0.7);
    color: #fff;
  }
`;
