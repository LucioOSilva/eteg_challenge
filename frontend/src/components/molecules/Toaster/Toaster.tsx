import { type FC, useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { useContextToaster } from '@/hooks';

const ToastItem: FC<ToastItemProps> = ({ toast, onRemove }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleRemove = () => {
    setIsLeaving(true);
    setTimeout(() => onRemove(toast.id), 200);
  };

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      case 'info':
        return <Info className="w-5 h-5 text-blue-500" />
      default:
        return <Info className="w-5 h-5 text-blue-500" />
    }
  };

  const getToastStyles = () => {
    const baseStyles = "bg-card border border-border rounded-lg shadow-lg p-4 min-w-[300px] max-w-[400px] transition-all duration-300 ease-in-out";
    
    if (isLeaving) {
      return `${baseStyles} opacity-0 transform translate-x-full scale-95`;
    }
    
    if (isVisible) {
      return `${baseStyles} opacity-100 transform translate-x-0 scale-100`;
    }
    
    return `${baseStyles} opacity-0 transform translate-x-full scale-95`;
  };

  return (
    <div className={getToastStyles()}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          {getIcon()}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-card-foreground">
                {toast.title}
              </h4>
              {toast.description && (
                <>
                  {Array.isArray(toast.description) ? (
                    <div className="text-sm text-muted-foreground mt-1">
                      {toast.description.map((line, index) => (
                        <p key={index} className="mb-1 last:mb-0">
                          {line}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground mt-1 whitespace-pre-line">
                      {toast.description}
                    </p>
                  )}
                </>
              )}
            </div>
            
            <button
              onClick={handleRemove}
              className="flex-shrink-0 ml-2 p-1 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          {toast.action && (
            <div className="mt-3">
              <button
                onClick={toast.action.onClick}
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                {toast.action.label}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export const Toaster: FC<ToasterProps> = ({ 
  position = 'top-right',
  maxToasts = 5 
}) => {
  const { toasts, removeToast } = useContextToaster();

  const getPositionStyles = () => {
    const baseStyles = "fixed z-[51] flex flex-col gap-2 pointer-events-none";
    
    switch (position) {
      case 'top-right':
        return `${baseStyles} top-4 right-4`;
      case 'top-left':
        return `${baseStyles} top-4 left-4`;
      case 'bottom-right':
        return `${baseStyles} bottom-4 right-4 flex-col-reverse`;
      case 'bottom-left':
        return `${baseStyles} bottom-4 left-4 flex-col-reverse`;
      case 'top-center':
        return `${baseStyles} top-4 left-1/2 -translate-x-1/2`;
      case 'bottom-center':
        return `${baseStyles} bottom-4 left-1/2 -translate-x-1/2 flex-col-reverse`;
      default:
        return `${baseStyles} top-4 right-4`;
    }
  };

  const visibleToasts = toasts.slice(-maxToasts);

  if (visibleToasts.length === 0) return null;

  return (
    <div className={getPositionStyles()}>
      {visibleToasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <ToastItem toast={toast} onRemove={removeToast} />
        </div>
      ))}
    </div>
  );
};
