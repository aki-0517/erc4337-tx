# ERC-4337 Account Abstraction Transactions

This project demonstrates how to send Account Abstraction (AA) transactions using ERC-4337.

## Detail

https://zenn.dev/aki_on/articles/e0cdf65174437c

## Features

- Construct and send Account Abstraction transactions
- Utilize `userop.js` for building UserOperations
- Interact with Ethereum networks via `ethers.js`

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/erc4337-aa-transactions.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd erc4337-aa-transactions
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   RPC_URL=your_rpc_url
   ENTRY_POINT=your_entry_point_address
   SIMPLE_ACCOUNT_FACTORY=your_simple_account_factory_address
   PRIVATE_KEY=your_private_key
   ```

   Replace `your_rpc_url`, `your_entry_point_address`, `your_simple_account_factory_address`, and `your_private_key` with your actual configuration details.

### Usage

To send an Account Abstraction transaction:

```bash
node index.js
```

Ensure your environment variables are correctly set up before running the script.
