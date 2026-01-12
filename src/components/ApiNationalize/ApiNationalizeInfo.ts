export interface ApiNationalizeInfo {
  count: number;
  name: string;
  country: {
    country_id: string;
    probability: number;
  }[];
}