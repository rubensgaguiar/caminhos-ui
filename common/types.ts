export interface Checkpoint {
  title: string;
  link: string;
}

export interface Caminho {
  title: string;
  short_description: string;
  description: string[];
  youtubeId: string;
  caminho: Checkpoint[];
  img: string;
  extras_description: string;
  extras: Checkpoint[];
}

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: Caminho;
  onClose: () => void;
}

