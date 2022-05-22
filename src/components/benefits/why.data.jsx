import React from "react";
import { FaUserCheck as User, FaStar as Star } from "react-icons/fa";
import {
  BsFillFileEarmarkRuledFill as Rules,
  BsCoin as Coin,
} from "react-icons/bs";
import { AiFillHeart as Heart } from "react-icons/ai";
import { MdOutlineSupport as Support } from "react-icons/md";

const WHY_DATA = [
  {
    id: 1,
    name: "experience",
    title: "Doświadczenie",
    descr:
      "Od lat zajmujemy się wynajmem samochodów. Posiadamy setki zaufanych klientów.",
    icon: <User />,
  },
  {
    id: 2,
    name: "support",
    title: "Wsparcie",
    descr:
      "Zapewiamy pełne wsparcie, helpdesk, stały kontakt poprzez Messenger, telefon oraz e-mail!",
    icon: <Support />,
  },
  {
    id: 3,
    name: "rules",
    title: "Zasady",
    descr: "W naszej ofercie nie znajdziesz niejasności i ukrytych kosztów.",
    icon: <Rules />,
  },
  {
    id: 4,
    name: "save",
    title: "Oszczędność",
    descr:
      "Pobieramy pełna prowizję wyłącznie za rozliczenie pracy na jednej aplikacji.",
    icon: <Coin />,
  },
  {
    id: 5,
    name: "comfort",
    title: "Wygoda",
    descr:
      "Dzięki współpracy z nami nie musisz otwierać działalności gospodarczej czy prowadzić księgowości.",
    icon: <Star />,
  },
  {
    id: 6,
    name: "benefits",
    title: "Korzyści",
    descr: "Oferujemy szereg benefitów i rabatów dla kierowców.",
    icon: <Heart />,
  },
];

export default WHY_DATA;
