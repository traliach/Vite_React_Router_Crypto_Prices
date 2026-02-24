# Crypto Prices App

A React app that shows live crypto prices using the CoinGecko free API.

## What it does

- Click Currencies to see a list of crypto coins
- Click any coin to go to its price page
- The price page fetches the live USD rate from CoinGecko
- Shows a loading message while waiting
- Shows an error message if the fetch fails

## Concepts used

- **React Router** — handles navigation between pages without reloading
- **BrowserRouter** — wraps the whole app so routing works
- **Routes / Route** — maps each URL path to a page component
- **Link** — navigates between pages without a full page reload
- **useParams** — reads the coin name from the URL on the Price page
- **useState** — stores price, loading, and error values
- **useEffect** — triggers the fetch when the page loads or coin changes
- **async/await + try/catch** — handles the API call and errors cleanly

## Pages

- `Main.jsx` — home page
- `Currencies.jsx` — list of crypto coins with links
- `Price.jsx` — fetches and displays the price for a coin

## Components

- `Nav.jsx` — navigation links shown on every page

## How to run it

1. Clone the repo
2. Run `npm install --legacy-peer-deps`
3. Run `npm run dev`
4. Open `http://localhost:5173`

## API

This app uses the [CoinGecko API](https://www.coingecko.com/en/api). It is free and does not require an API key.
