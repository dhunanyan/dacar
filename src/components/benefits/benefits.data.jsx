import React from "react";
import {
  FaBuilding as Building,
  FaCar as Car,
  FaTaxi as Taxi,
  FaBicycle as Bicycle,
} from "react-icons/fa";
import { BsCashCoin as Cash } from "react-icons/bs";
import { BiFileBlank as Blank } from "react-icons/bi";

const BenefitsCardData = [
  {
    id: 1,
    name: "activity",
    title: "Nie musisz otwierać działalności",
    descr:
      "Niektóre aplikacje wymagają założenia działalności, aby móc podjąć w nich pracę. Dzięki współpracy z MB Partner nie musisz prowadzić księgowości i obawiać się kontroli skarbowej. Pracę prowadzisz na podstawie umowy zlecenie – rozliczasz się na podstawie PIT, który od nas otrzymujesz.",
    icon: <Building />,
  },
  {
    id: 2,
    name: "save",
    title: "Oszczędność czasu i pieniędzy",
    descr:
      "Dzięki Dacar Partner ograniczasz formalności związane z pracą w aplikacjach do minimum, dzięki czemu, zamiast tracić czas na papierkową robotę, możesz wykorzystać go na zarabianie! Możesz miesięcznie zaoszczędzić od kilkuset do nawet 2000 złotych! Zapewniamy najniższe możliwe podatki, które uwzględniają wszystkie ulgi (np. dla studentów, dla osób poniżej 26 roku życia).",
    icon: <Cash />,
  },
  {
    id: 3,
    name: "driver",
    title: "Najlepszy panel kierowcy",
    descr:
      "Nasz panel kierowcy w przeciwieństwie do konkurencyjnych ofert pozwala na wgląd do ogromnej ilości danych. Oferujemy pełne zestawienie podatków, szczegółowe wpływy z aplikacji czy rozliczenia faktur i kart paliwowych.",
    icon: <Car />,
  },
  {
    id: 4,
    name: "offer",
    title: "Atrakcyjna oferta dla firm",
    descr:
      "Dacar Partner posiada atrakcyjną ofertę dla przedsiębiorców – samofakturowanie, możliwości połączenia dochodów z różnych aplikacji w jeden przelew. Firmy mogą budować floty swoich kurierów i czerpać korzyści bez konieczności tworzenia swojego systemu flotowego..",
    icon: <Blank />,
  },
  {
    id: 5,
    name: "benefits",
    title: "Korzyści dla kierowców",
    descr:
      "Dacar Partner zapewnia największe korzyści dla kierowców TAXI (Uber, Bolt i FreeNow). Oferujemy karty paliwowe Circle K, Lotos, Orlen, wysokie rabaty na paliwo, myjnie oraz akcesoria. Umożliwiamy wypożyczenie taksometru i kasy fiskalnej, bezpłatne wypisy z licencji TAXI i wiele więcej!",
    icon: <Taxi />,
  },
  {
    id: 6,
    name: "currier",
    title: "Korzyści dla dostawców",
    descr:
      "Nie pobieramy prowizji od pobranej gotówki i napiwków. Dostawcy sami decydują kiedy chcą pracować, a dla kurierów Glovo jako jedyni na rynku oferujemy przelewy na konto już w czwartki! Inni partnerzy wynagrodzenie za poprzedni okres wypłacają dopiero po weekendzie!",
    icon: <Bicycle />,
  },
];

export default BenefitsCardData;
