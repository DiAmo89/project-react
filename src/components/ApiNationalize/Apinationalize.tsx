import { useState } from "react";
import type { ApiNationalizeInfo } from "./ApiNationalizeInfo";
import s from "./ApiNationalize.module.css";
import getCountryFullName from "../../utils/getCountryFullName";

export default function Apinationalize() {
  const [name, setName] = useState<string>("");
  const [info, setInfo] = useState<ApiNationalizeInfo | undefined>(undefined);

  async function fetchApiNationalize(name: string) {
    if (!name) return;
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    const data = await res.json();
    setInfo(data);
  }

  return (
    <div className={s.wrapper}>
      <h3>Api Nationalize</h3>

      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setInfo(undefined);
        }}
        placeholder="Your Name"
        className={s.input}
      />

      <button
        type="button"
        className={s.button}
        onClick={() => fetchApiNationalize(name)}
      >
        Search
      </button>

      {info && (
        <div className={s.card}>
          <h4 className={s.title}>Nationality Prediction</h4>

          <p>
            <strong>Name:</strong> {info.name}
          </p>
          <p>
            <strong>Total records:</strong> {info.count}
          </p>

          <div className={s.countries}>
            {info.country.map((c) => (
              <div key={c.country_id} className={s.countryItem}>
                <span>{getCountryFullName(c.country_id)}</span>
                <span>{(c.probability * 100).toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}