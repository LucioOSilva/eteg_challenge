// components/organisms/CustomerList/CustomerList.tsx

import { type FC } from 'react';
import { Mail, FileText, Calendar, Palette, StickyNote, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatDate } from '@/utils/utils';

const Row: FC<{ icon: React.ReactNode; label: string; value: React.ReactNode }> = ({ icon, label, value }) => (
  <div className="flex items-start gap-2">
    <span className="text-muted-foreground mt-0.5 shrink-0">{icon}</span>
    <div className="flex flex-col min-w-0">
      <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">{label}</span>
      <span className="text-xs text-foreground truncate">{value}</span>
    </div>
  </div>
);

const CustomerCard: FC<{ customer: Customer; index: number }> = ({ customer, index }) => (
  <article
    className="group relative flex flex-col gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200"
    style={{ animationDelay: `${index * 40}ms` }}
  >
    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-full shrink-0 ring-2 ring-border"
        style={{ backgroundColor: customer.favoriteColor }}
      />
      <div className="flex flex-col min-w-0">
        <span className="font-semibold text-sm text-foreground truncate">{customer.fullName}</span>
        <span className="text-[11px] text-muted-foreground truncate">{customer.email}</span>
      </div>
    </div>

    <div className="h-px bg-border" />

    <dl className="flex flex-col gap-2.5">
      <Row icon={<FileText className="w-3.5 h-3.5" />} label="CPF" value={customer.cpf} />
      <Row icon={<Mail className="w-3.5 h-3.5" />} label="Email" value={customer.email} />
      <Row
        icon={<Palette className="w-3.5 h-3.5" />}
        label="Cor favorita"
        value={
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-full border border-border" style={{ backgroundColor: customer.favoriteColor }} />
            <span>{customer.favoriteColor}</span>
          </span>
        }
      />
      <Row icon={<Calendar className="w-3.5 h-3.5" />} label="Cadastrado em" value={formatDate(customer.createdAt)} />
      {customer.observations && (
        <Row icon={<StickyNote className="w-3.5 h-3.5" />} label="Observações" value={customer.observations} />
      )}
    </dl>
  </article>
);

export const CustomerList: FC<CustomerListProps> = ({ customers, className }) => {
  if (!customers.length) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-3 text-muted-foreground">
        <User className="w-8 h-8 opacity-30" />
        <p className="text-sm">Nenhum cliente cadastrado ainda.</p>
      </div>
    );
  }

  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4', className)}>
      {customers.map((customer, index) => (
        <CustomerCard key={customer.id} customer={customer} index={index} />
      ))}
    </div>
  );
};