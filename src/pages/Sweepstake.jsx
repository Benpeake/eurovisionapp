import { useState } from "react";
import CountryName from "../components/CountryName";

const DEFAULT_NAMES = ["Player 1", "Player 2", "Player 3", "Player 4"];

function assignCountries(countryKeys, playerNames) {
  const shuffled = [...countryKeys].sort(() => 0.5 - Math.random());
  const n = playerNames.length;
  const base = Math.floor(shuffled.length / n);
  const extras = shuffled.length % n;

  const extraPlayers = new Set(
    [...Array(n).keys()].sort(() => 0.5 - Math.random()).slice(0, extras)
  );

  const assignments = playerNames.map(() => []);
  let index = 0;

  for (let p = 0; p < n; p++) {
    const size = base + (extraPlayers.has(p) ? 1 : 0);
    assignments[p] = shuffled.slice(index, index + size);
    index += size;
  }

  return playerNames.map((name, i) => ({ name, countries: assignments[i] }));
}

function Sweepstake({ sweepState, setSweepState, scores }) {
  const hasSweep = sweepState?.players?.some((p) => p.countries?.length > 0);
  const [names, setNames] = useState(() =>
    hasSweep ? sweepState.players.map((p) => p.name) : [...DEFAULT_NAMES]
  );

  function runSweepstake() {
    const playerNames = names.map((n, i) => n.trim() || DEFAULT_NAMES[i]);
    const countryKeys = Object.keys(scores);
    setSweepState({ players: assignCountries(countryKeys, playerNames) });
  }

  function resetSweepstake() {
    localStorage.removeItem("sweepstake");
    setSweepState(null);
    setNames([...DEFAULT_NAMES]);
  }

  function updateName(index, value) {
    setNames((prev) => prev.map((n, i) => (i === index ? value : n)));
  }

  return (
    <div className="flex flex-col px-[1rem] pb-6">
      {!hasSweep && (
        <div className="flex flex-col gap-4 mt-6">
          <p className="text-black opacity-40 text-value text-center">Enter names, then draw — all countries are split evenly.</p>
          {names.map((name, index) => (
            <input
              key={index}
              type="text"
              value={name}
              onChange={(e) => updateName(index, e.target.value)}
              placeholder={DEFAULT_NAMES[index]}
              className="bg-white text-title text-black px-4 py-3 rounded-full border border-black/10 w-full text-center"
            />
          ))}
          <button
            type="button"
            onClick={runSweepstake}
            className="bg-pink text-value text-white font-semibold uppercase px-4 pt-3 pb-4 rounded-full w-full text-center leading-[95%]"
          >
            Run sweepstake
          </button>
        </div>
      )}

      <div className="py-6 flex flex-col gap-6">
        {hasSweep &&
          sweepState.players.map((player, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h2 className="text-title font-semibold text-pink">{player.name}</h2>
              <div className="bg-off-white rounded-lg flex flex-col">
                {player.countries.map((key) => {
                  const country = scores[key];
                  if (!country) return null;
                  return (
                    <div key={key} className="py-3 px-3 border-b border-white last:border-0">
                      <CountryName name={country.label} flag={country.flag} />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

        {hasSweep && (
          <button
            type="button"
            onClick={resetSweepstake}
            className="bg-pink text-value text-white font-semibold uppercase px-4 pt-3 pb-4 rounded-full w-full text-center leading-[95%]"
          >
            Reset sweepstake
          </button>
        )}
      </div>
    </div>
  );
}

export default Sweepstake;
