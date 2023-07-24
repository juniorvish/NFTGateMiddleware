# NFTGateMiddleware

This is a Next.js middleware for token-gating a route based on the user holding a certain NFT using Holaplex Hub APIs.

## Setup

1. Clone the repository:

```bash
git clone https://github.com/juniorvish/NFTGateMiddleware.git
```

2. Install the dependencies:

```bash
npm install
```

## Configuration

You can configure the middleware by modifying the `config.js` file. Here you can set the project and drop.

## Usage

To use the middleware, import it in your `index.js` file and use it to token-gate a route.

```javascript
import { NFTGateMiddleware } from '../middleware/tokenGate.js';

// Token-gate a route
app.use('/protectedRoute', NFTGateMiddleware);
```

## Running the Application

To run the application, use the following command:

```bash
npm run dev
```

This will start the application on `http://localhost:3000`.

## Styling

If this is a web app, it uses Tailwind CSS for styling. You can modify the styles in the `styles` directory.

## API

The middleware interacts with the Holaplex Hub API. It checks if a user owns a specific NFT and token-gates a route based on this.

## Contributing

Contributions are welcome. Please submit a pull request or open an issue.

## License

MIT