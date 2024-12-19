require('dotenv').config(); // dotenvを読み込む
const { Wallet, parseEther } = require('ethers');
const { Client, Presets } = require('userop.js');

async function main() {
  // 環境変数から情報を読み込む
  const privateKey = process.env.PRIVATE_KEY;
  const rpcUrl = process.env.RPC_URL;
  const entryPoint = process.env.ENTRY_POINT;
  const simpleAccountFactory = process.env.SIMPLE_ACCOUNT_FACTORY;
  const recipient = process.env.RECIPIENT_ADDRESS;
  const transferAmount = parseEther('0.0001');

  // ウォレット作成
  const wallet = new Wallet(privateKey);

  // UserOperationの構築
  const account = await Presets.Builder.SimpleAccount.init(
    wallet,
    rpcUrl,
    entryPoint,
    simpleAccountFactory
  );

  const userOp = account.execute(recipient, transferAmount, '0x');

  // UserOperationを送信
  const client = await Client.init(rpcUrl, entryPoint);
  console.log('Sending UserOperation...');

  const response = await client.sendUserOperation(userOp, {
    onBuild: async (op) => {
      console.log('Signed UserOperation:', op);
    },
  });

  console.log('UserOpHash:', response.userOpHash);
  const event = await response.wait();
  console.log('Transaction hash:', event?.transactionHash ?? null);
}

main().catch(console.error);
