interface HeaderProps {
  className?: string;
  totalCustomers?: number;
  onCreateCustomer: (data: CreateCustomerPayload) => void
};