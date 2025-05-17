function CountryName({ flag, name }) {
  return (
    <div className="flex items-center gap-1">
      <div className="size-5 rounded-full overflow-hidden">
        <img src={flag} alt={`${name} flag`} className="w-ful h-full object-cover" />
      </div>
      <p className="text-title">{name}</p>
    </div>
  );
}

export default CountryName;
