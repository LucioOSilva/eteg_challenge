import { useState, useEffect } from 'react';
import * as CustomerService from '@/service/customer.service';

export const useFormCustomer = () => {
  const [customersList, setCustomersList] = useState<Customer[]>([]);
  const [customersListPagination, setCustomersListPagination] = useState<PaginationMeta>();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await CustomerService.listCustomersPaginated();
      if (response) {
        setCustomersList(response?.data?.data || []);
        setCustomersListPagination(response?.data?.meta);
      };
    };

    fetchUsers();
  }, []);

  return {
    customersList,
    customersListPagination,
    createCustomer: CustomerService.createCustomer,
    updateCustomerColor: CustomerService.updateCustomerColor,
  };
};