import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

export function ConnectWallet() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({ connector: new InjectedConnector() });
  const { disconnect } = useDisconnect();

  if (isConnected)
    return (
      <button
        onClick={() => disconnect()}
        className="px-4 py-2 bg-gray-800 text-white rounded-full"
      >
        {address.slice(0, 6)}...{address.slice(-4)} (Disconnect)
      </button>
    );
  return (
    <button
      onClick={() => connect()}
      className="px-4 py-2 bg-gray-800 text-white rounded-full"
    >
      Connect Wallet
    </button>
  );
}