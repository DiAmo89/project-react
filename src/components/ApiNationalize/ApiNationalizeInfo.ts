interface Country {
  country_id: string;
  probability: number;
}
export interface ApiNationalizeInfo {
  count: number;
  name: string;
  country: Country[];
}
