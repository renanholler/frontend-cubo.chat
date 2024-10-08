export interface Message {
  id: number;
  content: string;
  sender: 'CLIENT' | 'CUBO_CHAT';
  ticketId: number;
}
