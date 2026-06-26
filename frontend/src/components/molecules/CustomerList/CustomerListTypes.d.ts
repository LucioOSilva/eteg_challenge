interface CustomerListProps {
  customers: Customer[];
  className?: string;
  onEditColor?: (data: UpdateCustomerColorPayload) => void;
}