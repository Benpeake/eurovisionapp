import CountryName from "../components/CountryName";
import ShareButton from "../components/ShareButton";

function Table({ scores }) {
  const countryArray = Object.entries(scores).map(([key, value]) => ({
    key,
    ...value,
  }));

  const count = 1;

  return (
    <div className="flex flex-col bg-off-white px-[1rem]">
      {countryArray
        .slice()
        .sort((a, b) => {
          const totalA = (a.song || 0) + (a.stageing || 0);
          const totalB = (b.song || 0) + (b.stageing || 0);
          return totalB - totalA;
        })
        .map((country, index) => (
          <div key={index} className="flex justify-between py-3 border-b border-white">
            <div className="flex items-center gap-2">
              <p className="text-title text-black opacity-40">{index + 1}</p>
              <CountryName name={country.label} flag={country.flag} />
            </div>
            <div className="size-7 rounded tag active flex items-center justify-center">
              <p className="text-value">{(country.song || 0) + (country.stageing || 0)}</p>
            </div>
          </div>
        ))}
      <div className="pt-6 pb-4 mx-auto w-full">
        <ShareButton />
      </div>
    </div>
  );
}

export default Table;
