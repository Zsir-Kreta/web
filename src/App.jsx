import { useState, useEffect } from 'react';

function App() {
const [isDarkMode, setIsDarkMode] = useState(false);

useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setIsDarkMode(savedTheme === 'dark');
    } else {
        const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(userPrefersDark);
    }}, []);

const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
};

const [showAlert, setShowAlert] = useState(false);

const handleClick = () => {
    setShowAlert(true);
};

const handleCloseAlert = () => {
    setShowAlert(false);
};

    return (
        <div
            className={`min-h-screen flex flex-col justify-center items-center transition-all duration-500 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
            <header
                className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow w-full py-3 transition-all duration-500`}>
                <h1 className="text-5xl font-bold text-center text-blue-600">Zsír!Kréta</h1>
                <h2 className="text-center text-xl mt-2">Legyen zsír a krétád!</h2>
                <button
                    onClick={toggleTheme}
                    className="absolute top-4 right-4 p-2 bg-gray-300 dark:bg-gray-700 rounded-full transition-all duration-500"
                >
                    {isDarkMode ? '🌞' : '🌙'}
                </button>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center px-4 mt-6">
                <p className="text-lg text-center max-w-2xl">
                    A Zsír!Kréta böngészőbővítmény segít abban, hogy könnyebben és hatékonyabban használd az Ovikrétát.
                </p>
                <button
                    className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
                    onClick={handleClick}>
                    Hozzáadás a böngészőhöz
                </button>
                {showAlert && (
                    <div className="bg-yellow-300 text-gray-900 p-4 rounded-md mt-4">
                        <p className="font-bold text-center">Oops!</p>
                        <p className="text-center">A böngészőbővítmény még nem érhető el.</p>
                        <p className="text-center">Próbáld újra később!</p>
                        <button className="bg-gray-900 text-white block mr-auto ml-auto mt-4 py-2 rounded-md"
                                onClick={handleCloseAlert}>
                            OK
                        </button>
                    </div>
                )}
                <section className="mt-12 w-full max-w-4xl">
                    <h3 className="text-3xl font-bold text-center text-blue-600 mb-8">Funkciók</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Naplózás bezárása mellé kattintáskor",
                            "Átmásolás a hét többi napjára gomb hozzáadása a naplózás ablakokhoz",
                            "Csoportnapló megvalósultként való beállítása, mentés előtt",
                            "Dátum automatikus beállítása a kiválasztott hét alapján",
                            "Naplózási tartalmak szerkesztése, megtekintés helyett",
                            "Egyéb hasznos információk megjelenítése a naptárban",
                            "Alapértelmezett design módosítása",
                            "Sötét mód",
                            "Egyéni színkód beállítása háttérnek",
                            "Üdvözlő kártya eltávolítása és napló felnagyítása"
                        ].map((feature, index) => (
                            <li
                                key={index}
                                className="flex justify-center items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-full"
                            >
                                <p className="text-lg text-gray-800 font-medium">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
            <footer className="py-4 text-center text-sm text-gray-500">
                © 2024 Zsír!Kréta - Minden jog fenntartva | Készítette:
                <a href="https://smmest3r.dev/" className="text-blue-600 hover:underline" target="_blank"
                   rel="noopener noreferrer">
                    smmest3r.dev
                </a>
            </footer>
        </div>
    );
}
export default App;