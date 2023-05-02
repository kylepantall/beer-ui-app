export default class Beer {
   id: number;
   name: string;
   tagline: string;
   first_brewed: string;
   description: string;
   image_url: string;
   abv: number;
   ibu: number;
   target_fg: number;
   target_og: number;
   ebc: number;
   srm: number;
   ph: number;
   attenuation_level: number;
   volume: {
      value: number;
      unit: string;
   };
   boil_volume: {
      value: number;
      unit: string;
   };
   method: {
      mash_temp: [
         {
            temp: {
               value: number;
               unit: string;
            };
            duration?: number;
         },
      ];
      fermentation: {
         temp: {
            value: number;
            unit: string;
         };
      };
      twist?: any;
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
   food_pairing: string[];
   brewers_tips: string;
   contributed_by: string;

   constructor(data: any) {
      this.id = data.id;
      this.name = data.name;
      this.tagline = data.tagline;
      this.first_brewed = data.first_brewed;
      this.description = data.description;
      this.image_url = data.image_url;
      this.abv = data.abv;
      this.ibu = data.ibu;
      this.target_fg = data.target_fg;
      this.target_og = data.target_og;
      this.ebc = data.ebc;
      this.srm = data.srm;
      this.ph = data.ph;
      this.attenuation_level = data.attenuation_level;
      this.volume = data.volume;
      this.boil_volume = data.boil_volume;
      this.method = data.method;
      this.ingredients = data.ingredients;
      this.food_pairing = data.food_pairing;
      this.brewers_tips = data.brewers_tips;
      this.contributed_by = data.contributed_by;
   }
}
