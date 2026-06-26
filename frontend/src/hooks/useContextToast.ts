import { useContext } from 'react';
import { ToasterContext } from '../context/ToastContext';

export const useContextToaster = (): ToasterContextType => {
  const context = useContext(ToasterContext);

  if (!context) {
    throw new Error('useToaster deve ser usado dentro de um ToasterProvider');
  }
  
  return context;
};
