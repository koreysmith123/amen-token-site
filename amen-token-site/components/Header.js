import Image from 'next/image';
import { ConnectWallet } from './Wallet';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-yellow-200 shadow-md">
      <Image src="/amen-logo.png" alt="AMEN Logo" width={50} height={50} />
      <ConnectWallet />
    </header>
  );
}