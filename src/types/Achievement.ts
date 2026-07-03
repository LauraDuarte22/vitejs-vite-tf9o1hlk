export type Achievement = {
    id: string;
    title: string;
    description: string;
    icon: string;
  
    unlocked: boolean;
  
    progress?: number;
    total?: number;
  };