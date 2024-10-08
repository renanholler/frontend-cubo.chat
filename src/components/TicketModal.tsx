import { Message } from '@/types/Message';
import { Ticket } from '@/types/Ticket';
import { api } from '@/utils/api';
import { useEffect, useState } from 'react';
import { MessageBody } from './MessageBody';
import { Button } from './ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Separator } from './ui/separator';

interface TicketModalProps {
  ticket: Ticket;
  onChangeStatus: () => Promise<void>;
}

export function TicketModal({ ticket, onChangeStatus }: TicketModalProps) {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    api.get(`/messages/${ticket.id}`).then(({ data }) => {
      setMessages(data);
    });
  }, [ticket.id]);

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Chat</DialogTitle>
        <DialogDescription>{ticket.clientName}</DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-4 border-solid">
        {messages.map((message) => MessageBody({ message }))}
      </div>
      {ticket.status !== 'CLOSED' && (
        <>
          <Separator />
          <DialogFooter>
            <Button onClick={onChangeStatus}>
              {ticket.status === 'WAITING' && 'Abrir Atendimento'}
              {ticket.status === 'OPEN' && 'Fechar Atendimento'}
            </Button>
          </DialogFooter>
        </>
      )}
    </DialogContent>
  );
}
