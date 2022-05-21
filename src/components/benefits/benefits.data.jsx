import React from "react";
import {
  FaBuilding as Building,
  FaCar as Car,
  FaTaxi as Taxi,
  FaBicycle as Bicycle,
} from "react-icons/fa";
import { BsCashCoin as Cash } from "react-icons/bs";
import { BiFileBlank as Blank } from "react-icons/bi";
import { MdOutlineSchedule as Time } from "react-icons/md";

const BenefitsCardData = [
  {
    id: 1,
    name: "activity",
    title: "Nie musisz otwierać działalności",
    descr:
      "Niektóre aplikacje wymagają założenia działalności, aby móc podjąć w nich pracę. Dzięki współpracy z Dacar Partner nie musisz prowadzić księgowości i obawiać się kontroli skarbowej.",
    icon: <Building />,
  },
  {
    id: 2,
    name: "save",
    title: "Oszczędność czasu i pieniędzy",
    descr:
      "Dzięki Dacar Partner ograniczasz formalności związane z pracą w aplikacjach do minimum, dzięki czemu, zamiast tracić czas na papierkową robotę, możesz wykorzystać go na zarabianie. Możesz miesięcznie zaoszczędzić do kilkuset złotych. ",
    icon: <Cash />,
  },
  {
    id: 3,
    name: "driver",
    title: "Najlepszy panel kierowcy",
    descr:
      "Nasz panel kierowcy w przeciwieństwie do konkurencyjnych ofert pozwala na wgląd do ogromnej ilości danych. Oferujemy pełne zestawienie podatków, szczegółowe wpływy z aplikacji czy rozliczenia faktur i kart paliwowych. Brak ukrytych kosztów i niejasności. ",
    icon: <Car />,
  },
  {
    id: 4,
    name: "offer",
    title: "Atrakcyjna oferta dla firm",
    descr:
      "Dacar Partner posiada atrakcyjną ofertę dla przedsiębiorców – samofakturowanie, możliwości połączenia dochodów z różnych aplikacji w jeden przelew.",
    icon: <Blank />,
  },
  {
    id: 5,
    name: "benefits",
    title: "Korzyści dla kierowców",
    descr:
      "Dacar Partner zapewnia największe korzyści dla kierowców TAXI (Uber, Bolt i FreeNow). Oferujemy wypożyczenie taksonometru i kasy fiskalnej oraz bezpłatne wypisy z licencji TAXI oraz wiele innych.",
    icon: <Taxi />,
  },
  {
    id: 6,
    name: "schedule",
    title: "Elastyczny godziny pracy",
    descr:
      "Kierowcy sami decydują o godzinach swojej pracy oraz tworzą własny grafik. Oferujemy prace na podstawie umowy zlecenie.",
    icon: <Time />,
  },
];

export default BenefitsCardData;
