import { type FC, useState } from 'react';
import { Mail, FileText, Calendar, Palette, StickyNote, User, Pencil } from 'lucide-react';
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

const CustomerCard: FC<{ customer: Customer; index: number; onEdit?: (data: UpdateCustomerColorPayload) => void }> = ({ customer, index, onEdit }) => {
  const [isEditingColor, setIsEditingColor] = useState(false);
  const [color, setColor] = useState(customer.favoriteColor);

  const handleColorChange = async (newColor: string) => {
    setColor(newColor);
    await onEdit?.({ id: customer.id, favoriteColor: newColor });
    setIsEditingColor(false);
  };

  return (
    <article
      className="group relative flex flex-col gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full shrink-0 ring-2 ring-border transition-colors duration-200"
          style={{ backgroundColor: color }}
        />
        <div className="flex flex-col min-w-0">
          <span className="font-semibold text-sm text-foreground truncate">{customer.fullName}</span>
          <span className="text-[11px] text-muted-foreground truncate">{customer.email}</span>
        </div>
      </div>

      <div className="h-px bg-border" />

      <div className="flex flex-col gap-2.5 flex-1">
        <Row icon={<FileText className="w-3.5 h-3.5" />} label="CPF" value={customer.cpf} />
        <Row icon={<Mail className="w-3.5 h-3.5" />} label="Email" value={customer.email} />

        {/* Cor favorita com edição */}
        <div className="flex items-start gap-2">
          <span className="text-muted-foreground mt-0.5 shrink-0">
            <Palette className="w-3.5 h-3.5" />
          </span>
          <div className="flex flex-col min-w-0 w-full">
            <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">Cor favorita</span>
            {isEditingColor ? (
              <div className="flex items-center gap-2 mt-0.5">
                <input
                  type="color"
                  defaultValue={color}
                  autoFocus
                  className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent p-0"
                  onChange={(e) => setColor(e.target.value)}
                  onBlur={(e) => handleColorChange(e.target.value)}
                />
                <span className="text-xs text-muted-foreground">{color}</span>
              </div>
            ) : (
              <span
                className="group/color flex items-center gap-1.5 cursor-pointer mt-0.5 w-fit rounded-md px-1.5 py-0.5 -ml-1.5 hover:bg-accent/60 transition-colors duration-150"
                onClick={() => setIsEditingColor(true)}
              >
                <span
                  className="inline-block w-3 h-3 rounded-full border border-border shrink-0 transition-colors duration-200"
                  style={{ backgroundColor: color }}
                />
                <span className="text-xs text-foreground">{color}</span>
                <Pencil className="w-3 h-3 opacity-0 text-primary group-hover/color:opacity-60 transition-opacity  ml-0.5" />
              </span>
            )}
          </div>
        </div>

        {customer.observations && (
          <Row icon={<StickyNote className="w-3.5 h-3.5" />} label="Observações" value={customer.observations} />
        )}
      </div>

      <div className="h-px bg-border" />
      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground/60">
        <Calendar className="w-3 h-3" />
        <span>Cadastrado em {formatDate(customer.createdAt)}</span>
      </div>
    </article>
  );
};

export const CustomerList: FC<CustomerListProps> = ({ customers, className, onEditColor }) => {
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
        <CustomerCard key={customer.id} customer={customer} index={index} onEdit={onEditColor} />
      ))}
    </div>
  );
};