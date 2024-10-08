import { toast } from '@/hooks/use-toast';
import { Ticket } from '@/types/Ticket';
import { api } from '@/utils/api';
import { TicketCard } from './TicketCard';
import { TicketModal } from './TicketModal';
import { Dialog } from './ui/dialog';
import { Separator } from './ui/separator';

interface TicketsBoardProps {
  title: string;
  color: string;
  tickets: Ticket[];
  onChangeTicketStatus: (ticketId: number, status: Ticket['status']) => void;
}

export function TicketsBoard({
  title,
  color,
  tickets,
  onChangeTicketStatus,
}: TicketsBoardProps) {
  async function changeTicketStatus(ticket: Ticket) {
    try {
      const status = ticket.status === 'WAITING' ? 'OPEN' : 'CLOSED';
      const { data: updatedTicket } = await api.patch(`/tickets/${ticket.id}`, {
        status,
      });

      onChangeTicketStatus(updatedTicket.id, status);

      toast({
        description: 'Status alterado.',
      });
    } catch (error) {
      console.error('Erro ao alterar o status do ticket:', error);
    }
  }

  return (
    <div className="p-4 border-solid rounded-2xl bg-gray-200/[0.4] flex flex-col flex-1 items-center">
      <header className="p-2 text-sm flex items-center gap-2">
        <strong>{title}</strong>
        <span>( {tickets.length} )</span>
      </header>
      {tickets.length > 0 && <Separator className="mt-1" />}
      {tickets.map((ticket) => {
        return (
          <Dialog key={ticket.id}>
            <TicketCard status={title} color={color} ticket={ticket} />
            <TicketModal
              ticket={ticket}
              onChangeStatus={() => changeTicketStatus(ticket)}
            />
          </Dialog>
        );
      })}
    </div>
  );
}
