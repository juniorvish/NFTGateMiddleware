# NFTGateMiddleware

This is a Next.js middleware for token-gating a route based on the user holding a certain NFT using Holaplex Hub APIs.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/juniorvish/NFTGateMiddleware.git
```

2. Install dependencies:

```bash
cd NFTGateMiddleware
npm install
```

3. Configure the middleware by setting the `project` and `drop` in `config.js`:

```javascript
module.exports = {
  project: 'your_project_id',
  drop: 'your_drop_id',
};
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to the token-gated route at `http://localhost:3000/gatedRoute`.

## Usage

To use the NFTGateMiddleware in your own Next.js project, follow these steps:

1. Copy the `middleware.js`, `config.js`, and `holaplexAPI.js` files to your project's `lib` directory.

2. Import the `tokenGate` function from `middleware.js` and use it in your API route:

```javascript
import tokenGate from '../lib/middleware';

export default tokenGate(async (req, res) => {
  // Your protected route logic here
});
```

3. Configure the `project` and `drop` in `config.js` as described in the Getting Started section.

4. Make sure to have Tailwind CSS installed and configured if your project requires CSS.

That's it! Your route is now token-gated based on the user holding a specific NFT using Holaplex Hub APIs.