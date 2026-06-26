import { useState, useEffect } from 'react';
import * as CustomerService from '@/service/customer.service';
import { useContextToaster } from "@/hooks";

export const useFormCustomer = () => {
  const [isLoading, setIsloading] = useState({
    create: false,
    update: false
  });
  const [customersList, setCustomersList] = useState<Customer[]>([]);
  const [customersListPagination, setCustomersListPagination] = useState<PaginationMeta>();
  const { addToast } = useContextToaster();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await CustomerService.listCustomersPaginated();
        if (response) {
          setCustomersList(response.data?.data ?? []);
          setCustomersListPagination(response.data?.meta);
        }
      } catch (error) {
        console.error('Erro ao buscar clientes');
        addToast({
          type: 'error',
          title: 'Falha ao listar usuários',
          description: error as string ?? 'Não foi possível carregar a lista de clientes.',
        });
      }
    };
    fetchUsers();
  }, []);

  const handleCreateCustomer = async (data: CreateCustomerPayload) => {
    try {
      setIsloading(prev => ({ ...prev, create: true }));
      return await CustomerService.createCustomer(data);
    } catch (error) {
      console.error('Erro ao criar cliente');
      addToast({
        type: 'error',
        title: 'Falha ao criar cliente',
        description: 'Não foi possível criar novo clientes, tente novamente.',
      });
      return undefined;
    } finally {
      setIsloading(prev => ({ ...prev, create: false }));
    }
  }

  const updateCustomerColor = async (data: UpdateCustomerColorPayload) => {
    try {
      setIsloading(prev => ({ ...prev, update: true }));
      return await CustomerService.updateCustomerColor(data);
    } catch (error) {
      console.error('Erro ao atualizar a cor do cliente');
      addToast({
        type: 'error',
        title: 'Falha ao atualizar a cor do cliente',
        description: 'Não foi possível atualizar a cor do clientes, tente novamente.',
      });
      return undefined;
    } finally {
      setIsloading(prev => ({ ...prev, update: false }));
    }
  }

  return {
    isLoading,
    customersList,
    customersListPagination,
    createCustomer: handleCreateCustomer,
    updateCustomerColor: updateCustomerColor,
  };
};