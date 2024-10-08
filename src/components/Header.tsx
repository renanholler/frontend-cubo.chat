import { ChatBubbleIcon } from '@radix-ui/react-icons';

export function Header() {
  return (
    <header className="bg-green-700">
      <div className="text-white p-4 flex items-center justify-between mx-4">
        <div>
          <h1 className="text-2xl">
            <strong>CUBO</strong>.CHAT
          </h1>
          <h2>Gerenciamento de atendimentos via Whatsapp</h2>
        </div>
        <ChatBubbleIcon className="w-8 h-8" />
      </div>
    </header>
  );
}
