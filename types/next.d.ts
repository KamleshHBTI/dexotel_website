import { Metadata } from 'next';

declare module 'next' {
  export interface PageProps {
    params: { [key: string]: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface MetadataProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
} 