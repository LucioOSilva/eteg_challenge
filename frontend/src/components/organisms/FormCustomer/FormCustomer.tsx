import { useState, type FC } from 'react';
import { InputField, ColorPicker, TextareaField } from '@/components/molecules';
import { Card } from '@/components/atoms';
import {
  regexFormatCPF,
  regexValidateCPF,
  regexValidateEmail,
  validateRequired,
} from '@/utils/utils';

interface FormCustomerFields {
  name: string;
  cpf: string;
  email: string;
  favoriteColor: string;
  notes: string;
}

interface FormCustomerErrors {
  name?: string;
  cpf?: string;
  email?: string;
  favoriteColor?: string;
}

const INITIAL_FIELDS: FormCustomerFields = {
  name: '',
  cpf: '',
  email: '',
  favoriteColor: '',
  notes: '',
};

const INITIAL_ERRORS: FormCustomerErrors = {};

export const FormCustomer: FC<FormCustomerProps> = ({ onCreateCustomer }) => {
  const [fields, setFields] = useState<FormCustomerFields>(INITIAL_FIELDS);
  const [errors, setErrors] = useState<FormCustomerErrors>(INITIAL_ERRORS);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'cpf') {
      setFields((prev) => ({ ...prev, cpf: regexFormatCPF(value) }));
      return;
    }

    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleColorChange = (value: string) => {
    setFields((prev) => ({ ...prev, favoriteColor: value }));
    if (errors.favoriteColor) {
      setErrors((prev) => ({ ...prev, favoriteColor: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormCustomerErrors = {};

    if (!validateRequired(fields.name)) {
      newErrors.name = 'Nome completo é obrigatório.';
    }

    if (!validateRequired(fields.cpf)) {
      newErrors.cpf = 'CPF é obrigatório.';
    } else if (!regexValidateCPF(fields.cpf)) {
      newErrors.cpf = 'CPF inválido.';
    }

    if (!validateRequired(fields.email)) {
      newErrors.email = 'E-mail é obrigatório.';
    } else if (!regexValidateEmail(fields.email)) {
      newErrors.email = 'E-mail inválido.';
    }

    if (!validateRequired(fields.favoriteColor)) {
      newErrors.favoriteColor = 'Selecione uma cor preferida.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const payload = {
      fullName: fields.name.trim(),
      cpf: fields.cpf,
      email: fields.email.trim(),
      favoriteColor: fields.favoriteColor,
      notes: fields.notes.trim(),
    };

    onCreateCustomer?.(payload);
  };

  const handleClear = () => {
    setFields(INITIAL_FIELDS);
    setErrors(INITIAL_ERRORS);
  };

  return (
    <Card className="w-full mx-auto" classNameContent="flex flex-col gap-6">

        {/* ── Seção: Informações Pessoais ── */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wide border-b border-border pb-2">
            Informações pessoais
          </h2>

          <InputField
            label="Nome completo"
            name="name"
            value={fields.name}
            onChange={handleChange}
            placeholder="Ex.: Maria Oliveira"
            error={errors.name}
            autoComplete="name"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              label="CPF"
              name="cpf"
              value={fields.cpf}
              onChange={handleChange}
              placeholder="000.000.000-00"
              inputMode="numeric"
              error={errors.cpf}
              autoComplete="off"
              tooltip="Somente números — a formatação é automática."
            />

            <InputField
              label="E-mail"
              name="email"
              type="email"
              value={fields.email}
              onChange={handleChange}
              placeholder="nome@empresa.com"
              error={errors.email}
              autoComplete="email"
            />
          </div>
        </section>

        {/* ── Seção: Cor Preferida ── */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wide border-b border-border pb-2">
            Cor preferida
          </h2>

          <ColorPicker
            value={fields.favoriteColor}
            onChange={handleColorChange}
            error={errors.favoriteColor}
            hint="Selecione uma das cores do arco-íris."
            label="Cor preferida"
          />
        </section>

        {/* ── Seção: Observações ── */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wide border-b border-border pb-2">
            Observações
          </h2>

          <TextareaField
            label="Observações"
            name="notes"
            value={fields.notes}
            onChange={handleChange}
            placeholder="Informações adicionais sobre o cliente..."
            hint="Campo opcional."
          />
        </section>

        {/* ── Ações ── */}
        <div className="flex items-center justify-end gap-3 pt-2 border-t border-border">
          <button
            type="button"
            onClick={handleClear}
            className="px-4 py-2 text-sm font-medium text-muted-foreground border border-border rounded-lg hover:bg-secondary transition-colors duration-200"
          >
            Limpar
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:brightness-95 transition-all duration-200"
          >
            Cadastrar cliente
          </button>
        </div>
    </Card>
  );
};