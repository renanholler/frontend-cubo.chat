import { Message } from './Message';

export interface Ticket {
  id: number;
  clientName: string;
  status: 'WAITING' | 'OPEN' | 'CLOSED';
  messages: Message[];
}
