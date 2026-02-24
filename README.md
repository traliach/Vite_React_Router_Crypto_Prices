# Crypto Prices App

A React app that shows live crypto prices using the CoinAPI.

## What it does

- Click Currencies to see a list of crypto symbols
- Click any symbol to go to its price page
- The price page fetches the live USD rate from CoinAPI
- Shows a loading message while waiting
- Shows an error message if the fetch fails

## Concepts used

- **React Router** — handles navigation between pages without reloading
- **BrowserRouter** — wraps the whole app so routing works
- **Routes / Route** — maps each URL path to a page component
- **Link** — navigates between pages without a full page reload
- **useParams** — reads the symbol from the URL on the Price page
- **useState** — stores price, loading, and error values
- **useEffect** — triggers the fetch when the page loads or symbol changes
- **async/await + try/catch** — handles the API call and errors cleanly
- **Environment variable** — API key is stored in `.env`, not in the code

## Pages

- `Main.jsx` — home page
- `Currencies.jsx` — list of crypto symbols with links
- `Price.jsx` — fetches and displays the price for a symbol

## Components

- `Nav.jsx` — navigation links shown on every page

## How to run it

1. Clone the repo
2. Run `npm install --legacy-peer-deps`
3. Create a `.env` file in the root with your CoinAPI key:
   ```
   VITE_COINAPI_KEY=your_key_here
   ```
4. Run `npm run dev`
5. Open `http://localhost:5173`

## API

This app uses the [CoinAPI](https://www.coinapi.io). You can get a free API key at coinapi.io.
