import { Message } from '@/types/Message';
import clsx from 'clsx';

interface MessageBodyProps {
  message: Message;
}

export function MessageBody({ message }: MessageBodyProps) {
  return (
    <div
      key={message.id}
      className={clsx('flex', {
        'justify-end': message.sender === 'CUBO_CHAT',
        'justify-start': message.sender === 'CLIENT',
      })}
    >
      <div
        className={clsx('chat-bubble', {
          'chat-bubble-cubochat': message.sender === 'CUBO_CHAT',
          'chat-bubble-client': message.sender === 'CLIENT',
        })}
      >
        <p>{message.content}</p>
      </div>
    </div>
  );
}
