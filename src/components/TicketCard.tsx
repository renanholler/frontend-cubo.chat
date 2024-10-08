import { cn } from '@/lib/utils';
import { Ticket } from '@/types/Ticket';
import { PersonIcon } from '@radix-ui/react-icons';
import { MessageBody } from './MessageBody';
import { Badge } from './ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { DialogTrigger } from './ui/dialog';

interface TicketCardProps {
  status: string;
  color: string;
  ticket: Ticket;
}

export function TicketCard({ status, color, ticket }: TicketCardProps) {
  const lastMessage = ticket.messages?.[0] || null;
  return (
    <DialogTrigger asChild className="mt-4 w-full">
      <Card key={ticket.id}>
        <CardHeader className="font-bold">
          <div className="flex">
            <PersonIcon className="w-6 h-6 mr-2" />
            {ticket.clientName}
          </div>
        </CardHeader>
        <CardContent>
          <MessageBody message={lastMessage}></MessageBody>
        </CardContent>
        <CardFooter className="justify-end">
          <Badge className={cn(color)}>{status}</Badge>
        </CardFooter>
      </Card>
    </DialogTrigger>
  );
}
