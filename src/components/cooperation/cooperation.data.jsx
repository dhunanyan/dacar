import {
  FaBuilding as Building,
  FaCar as Car,
  FaTaxi as Taxi,
  FaRegHandshake as HandShake,
} from "react-icons/fa";
import { BsCashCoin as Cash } from "react-icons/bs";
import { BiFileBlank as Blank } from "react-icons/bi";
import { MdOutlineSchedule as Time } from "react-icons/md";

const COOPERATION_DATA = {
  uber: {
    title: "Uber Partner – Korzyści ze współpracy",
    cardsList: [
      {
        id: 1,
        name: "activity",
        title: "Brak własnej działalności gospodarczej",
        descr:
          "Uber wymaga własnej działalności, aby móc realizować przewozy przy użyciu ich aplikacji. Decydując się na współpracę z DACAR PARTNER, nie musisz jej otwierać, ponieważ pracujesz na podstawie umowy zlecenie. Nie musisz prowadzić księgowości, a rozliczasz się na podstawie PIT.",
        icon: <Building />,
      },
      {
        id: 2,
        name: "save",
        title: "Liczne benefity",
        descr:
          "Dzięki współpracy z nami ograniczasz formalności związane z pracą w aplikacji do minimum! Zapewniamy najniższe możliwe podatki uwzględniające wszystkie ulgi.",
        icon: <Cash />,
      },
      {
        id: 3,
        name: "support",
        title: "Pełne wsparcie",
        descr:
          "Oferujemy bezpłatne wypisy z licencji, wysyłamy gotowe wnioski, które wymagają tylko złożenia w urzędzie, lub realizujemy sami za kierowcę.",
        icon: <HandShake />,
      },
    ],
  },

  bolt: {
    title: "Bolt Partner – Korzyści ze współpracy",
    cardsList: [
      {
        id: 1,
        name: "activity",
        title: "Własna działalność nie jest wymagana",
        descr:
          "Kierowcy Bolta, którzy chcą wykonywać przewozy, muszą zarejestrować działalność gospodarczą. Osoby, które nie chcą otwierać działalności, mogą zdecydować się na współpracę z Dacar Partner! U nas pracujesz na podstawie umowy zlecenie, dzięki czemu w każdej chwili masz możliwość rezygnacji, nie musisz prowadzić księgowości, a rozliczenie odbywa się na podstawie PIT.",
        icon: <Building />,
      },
      {
        id: 2,
        name: "save",
        title: "Liczne benefity",
        descr:
          "Brak własnej firmy równa się brak księgowej i sterty dokumentów. Dzięki Dacar Partner oszczędzasz czas i pieniądze! Dodatkowo zapewniamy najniższe możliwe podatki, które uwzględniają wszystkie ulgi.",
        icon: <Cash />,
      },
      {
        id: 3,
        name: "support",
        title: "Pełne wsparcie",
        descr:
          "Oferujemy bezpłatne wypisy z licencji TAXI, wysyłamy gotowe dokumenty, które wymagają tylko złożenia w urzędzie, lub robimy to za kierowcę.",
        icon: <Blank />,
      },
    ],
  },

  "free-now": {
    title: "FreeNow Partner - Korzyści ze współpracy",
    cardsList: [
      {
        id: 1,
        name: "activity",
        title: "Nie musisz zakładać firmy!",
        descr:
          "Współpracując z Dacar Partner, nie musisz otwierać własnej działalności, aby pracować jako kierowca Free Now. Pracujesz w pełni legalnie na podstawie umowy zlecenie, nie musisz prowadzić księgowości i rozliczasz się na podstawie PIT.",
        icon: <Building />,
      },
      {
        id: 2,
        name: "save",
        title: "Oszczędzasz",
        descr:
          "Zapewniamy najniższe możliwe podatki uwzględniające wszystkie ulgi.",
        icon: <Cash />,
      },
      {
        id: 3,
        name: "support",
        title: "Pełne wsparcie",
        descr:
          "Zapewniamy bezpłatne wypisy z licencji TAXI, wysyłamy gotowe wnioski, które wymagają tylko złożenia w urzędzie lub robimy to za Ciebie!",
        icon: <Blank />,
      },
    ],
  },
};

export default COOPERATION_DATA;
