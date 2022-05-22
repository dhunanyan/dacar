import driver from "../../assets/worksFreenow.jpg";
import rental from "../../assets/rental.jpg";

const OUR_OFFER_CARDS_DATA = [
  {
    id: 1,
    url: "/offer/driver",
    name: "driver",
    title: "Kierowca",
    descr:
      "Pracuj jako kierowca taksówki i realizuj kursy w kilku aplikacjach. Oferujemy rabaty na paliwo, mycie samochodu, wypisy z licencji taxi i wiele więcej!",
    imageUrl: driver,
  },
  {
    id: 2,
    name: "rental",
    url: "/offer/vehicles",
    title: "Wynajem samochodów",
    descr:
      "Chcesz pracować jako kierowca taksówki, lecz nie posiadasz własnego pojazdu? Wynajmij u nas przystosowany do pracy samochód i zarabiaj jako kierowca taxi już dziś!",
    imageUrl: rental,
  },
];

export default OUR_OFFER_CARDS_DATA;
