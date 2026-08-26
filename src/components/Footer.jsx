export default function Footer() {
  let year = new Date();
  year = year.getFullYear();
  return (
    <footer className="w-full text-xs flex flex-col items-center md:flex-row md:justify-between p-2 bg-amber-200 text-stone-950">
      <p>© {year} Mushmes Weather App. Built for educational purposes.</p>
      <div className="flex justify-center gap-4 ">
        <a
          href="http://github.com/al-jbri/mushmes-weather"
          className="hover:underline"
        >
          GitHub
        </a>
        <span>•</span>
        <a href="https://open-meteo.com" className="hover:underline">
          Open-Meteo API
        </a>
      </div>
    </footer>
  );
}
