export default interface Beer {
  id: number;
  name: string;
  tagline: string;
  firstBrewed: string;
  description: string;
  imageUrl: string;
  abv: number;
  ibu: number;
  targetFg: number;
  targetOg: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuationLevel: number;
  volume: {
    value: number;
    unit: string;
  };
  boilVolume: {
    value: number;
    unit: string;
  };
  method: {
    mashTemp: [
      {
        temp: {
          value: number;
          unit: string;
        };
        duration: number;
      },
    ];
    fermentation: {
      temp: {
        value: number;
        unit: string;
      };
    };
    twist?: string;
  };
  ingredients: {
    malt: [
      {
        name: string;
        amount: {
          value: number;
          unit: string;
        };
      },
    ];
    hops: [
      {
        name: string;
        amount: {
          value: number;
          unit: string;
        };
        add: string;
        attribute: string;
      },
    ];
    yeast: string;
  };
  foodPairing: string[];
  brewersTips: string;
  contributedBy: string;
}
