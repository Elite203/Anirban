import React, { useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

const usePreventDevTools = () => {
  const { toast } = useToast();

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      toast({
        title: "Heads up!",
        description: "Source code viewing is disabled on this site.",
        variant: "destructive",
      });
    };

    // const handleKeyDown = (e) => {
    //   if (
    //     e.key === 'F12' ||
    //     (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) ||
    //     (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) ||
    //     (e.ctrlKey && (e.key === 'U' || e.key === 'u')) ||
    //     (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c'))
    //   ) {
    //     e.preventDefault();
    //     toast({
    //       title: "Heads up!",
    //       description: "Developer tools are disabled on this site.",
    //       variant: "destructive",
    //     });
    //   }
    // };

    document.addEventListener('contextmenu', handleContextMenu);
    // document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      // document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toast]);
};

export default usePreventDevTools;