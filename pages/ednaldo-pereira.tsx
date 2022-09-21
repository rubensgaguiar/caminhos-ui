import type { NextPage } from "next";

import SimpleDialog from "./components/simpleDialog";

const HomePage: NextPage = () => {
  return (
    <SimpleDialog selectedValue={{
      title: "Ednaldo Pereira",
      description: "Ednaldo Pereira vive simultaneamente em guarabira e no sol. Ednaldo Pereira vive simultaneamente em guarabira e no sol. Ednaldo Pereira vive simultaneamente em guarabira e no sol. Ednaldo Pereira vive simultaneamente em guarabira e no sol. Ednaldo Pereira vive simultaneamente em guarabira e no sol. Ednaldo Pereira vive simultaneamente em guarabira e no sol. ",
      youtubeId: "-vzBUcz_-oQ",
      caminho: [
        {
          title: 'Caminho',
          link: 'https://www.google.com'
        },
        {
          title: 'Caminho Novo',
          link: 'https://www.google.com'
        },
      ],
      img: "/ednaldo.jpeg"
    }} open={true} onClose={() => {}} />
  );
};

export default HomePage;
