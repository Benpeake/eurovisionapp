import CountryName from "../components/CountryName";
import ScoreButtons from "../components/ScoreButtons";

function Score({ scores, setScores }) {
  const countryArray = Object.entries(scores).map(([key, value]) => ({
    key,
    ...value,
  }));

  function updateScore(countryName, field, value) {
    const key = countryName.trim().toLowerCase().replace(/\s+/g, "");
    setScores((prevScores) => ({
      ...prevScores,
      [key]: {
        ...prevScores[key],
        [field]: value,
      },
    }));
  }

  return (
    <div className="py-6 px-[1rem] bg-off-white  ">
      {countryArray
        .slice() // create a shallow copy
        .sort((a, b) => a.order - b.order)
        .map((country) => {
          return (
            <>
              <div key={country.order} className="flex flex-col gap-3 pb-6 pt-6 first:pt-0  border-b border-black-fade last:border-b-0">
                <CountryName name={country.label} flag={country.flag} />
                <div className="flex flex-col gap-1">
                  <p className="text-subheading text-black opacity-40">Song</p>
                  <ScoreButtons currentValue={country.song} onChange={(value) => updateScore(country.label, "song", value)} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-subheading text-black opacity-40">Staging</p>
                  <ScoreButtons currentValue={country.stageing} onChange={(value) => updateScore(country.label, "stageing", value)} />
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default Score;
