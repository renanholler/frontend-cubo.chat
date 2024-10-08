import { Ticket } from '@/types/Ticket';
import { api } from '@/utils/api';
import { useEffect, useState } from 'react';
import { TicketsBoard } from './TicketsBoard';

export function Dashboard() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    api.get('/tickets').then(({ data }) => {
      setTickets(data);
    });
  }, []);

  function handleTicketStatusChange(
    ticketId: number,
    status: Ticket['status'],
  ) {
    setTickets((prevState) => {
      const updatedTickets = prevState.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status } : ticket,
      );
      return updatedTickets;
    });
  }

  const waiting = tickets.filter((ticket) => ticket.status === 'WAITING');
  const open = tickets.filter((ticket) => ticket.status === 'OPEN');
  const closed = tickets.filter((ticket) => ticket.status === 'CLOSED');

  return (
    <div className="flex justify-center items-start gap-8 my-10 mx-auto w-full max-w-7xl">
      <TicketsBoard
        title="Aguardando"
        color="bg-red-600"
        tickets={waiting}
        onChangeTicketStatus={handleTicketStatusChange}
      />
      <TicketsBoard
        title="Aberto"
        color="bg-yellow-500"
        tickets={open}
        onChangeTicketStatus={handleTicketStatusChange}
      />
      <TicketsBoard
        title="Fechado"
        color="bg-green-700"
        tickets={closed}
        onChangeTicketStatus={handleTicketStatusChange}
      />
    </div>
  );
}
