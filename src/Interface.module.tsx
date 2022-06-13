import { DragEvent } from "react";

export interface ContextProps {
  children: React.ReactNode;
}
interface objectcss {
  right: number;
  down: number;
  spread: number;
  blur: number;
  opacity: number;
  inset: boolean;
  color: string;
}
export interface initState {
  css: objectcss;
  arr1: objectcss[];
  arr2: objectcss[];
  id: number;
  layer: number;
}
export interface ContextState {
  state: initState;
  dispatch: React.Dispatch<any>;
}

export interface InputProps {
  type: string;
  values: number | string | boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  typeopacity?: number;
  min?: number;
  max?: number;
  step?: number;
  checked?: boolean;
}

export interface LayerElementProps {
  key: number;
  ids: string;
  value: objectcss;
  OnDragStart: (e:DragEvent<HTMLLIElement>) => void;
  OnDragEnter: (e:DragEvent<HTMLLIElement>) => void;
    OnDragLeave: (e:DragEvent<HTMLLIElement>) => void;
  OnDragEnd: (e:DragEvent<HTMLLIElement>) => void;

  
}
