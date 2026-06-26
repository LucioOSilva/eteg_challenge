import { createContext, useState, useCallback, type FC, type ReactNode } from 'react';

interface ContextProviderProps {
  children: ReactNode;
}

export const ToasterContext = createContext<ToasterContextType | null>(null);

export const ToasterProvider: FC<ContextProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { ...toast, id };
    
    setToasts(prev => [...prev, newToast]);

    const duration = toast.duration ?? 4000;
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const clearToasts = useCallback(() => {
    setToasts([]);
  }, []);

  return (
    <ToasterContext.Provider value={{ toasts, addToast, removeToast, clearToasts }}>
      {children}
    </ToasterContext.Provider>
  );
};