import { SVGProps } from "react";

export interface IIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export interface IHeader {
  title: string;
  headerItems: IHeaderItem[];
  favorites?: boolean;
}

export interface IHeaderItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  inStock: boolean;
  imageUrl: string;
  gallery: string[];
  shortDescription: string;
  fullDescription: string;
  specs: Record<string, string>;
  updatedAt: string;
}
