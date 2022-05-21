import React from "react";
import {
  CommissionContainer,
  CommissionContent,
  CommissionSubtitle,
  CommissionTitle,
} from "./commission.styles";

const Commission = () => {
  return (
    <CommissionContainer>
      <CommissionTitle>Najniższa</CommissionTitle>
      <CommissionSubtitle>prowizja na rynku!</CommissionSubtitle>
      <CommissionContent>
        Rozliczenie tylko: <span>40 zł</span>
      </CommissionContent>
    </CommissionContainer>
  );
};

export default Commission;
